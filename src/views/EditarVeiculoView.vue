<script setup>
import { ref, onMounted } from 'vue'
import { useTransporteStore } from '@/stores/useTransporteStore'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const stores = useTransporteStore()

const id = route.params.id

const veiculo = ref({
    placa: '',
    modelo: '',
    ano: '',
    capacidade: ''
})

onMounted(() => {
    const encontrado = stores.veiculos.find(v => v.id == id)

    if (encontrado) {
        veiculo.value = {
            placa: encontrado.placa,
            modelo: encontrado.modelo,
            ano: encontrado.ano,
            capacidade: encontrado.capacidade
        }
    }
})

const salvar = () => {
    stores.atualizarVeiculo(Number(id), { ...veiculo.value })
    router.push('/lista')
}
</script>

<template>
    <div class="top-bar">
        <button class="back-button" @click="$router.back()">
            <span class="fa-solid fa-arrow-left" style="color: rgb(0, 0, 0);"></span>
        </button>

        <h1>Editar Veículo</h1>
    </div>

    <div class="editar-veiculo">
        <form @submit.prevent="salvar" class="editar-form">

            <div class="form-group">
                <label>Placa<span>*</span></label>
                <input v-model="veiculo.placa" required />
            </div>

            <div class="form-group">
                <label>Modelo<span>*</span></label>
                <input v-model="veiculo.modelo" required />
            </div>

            <div class="form-group">
                <label>Ano<span>*</span></label>
                <input v-model="veiculo.ano" required />
            </div>

            <div class="form-group">
                <label>Capacidade<span>*</span></label>
                <input v-model="veiculo.capacidade" required />
            </div>

            <button class="btn-salvar" type="submit">
                SALVAR ALTERAÇÕES
            </button>

            <button class="btn-cancelar" type="button" @click="$router.back()">
                CANCELAR
            </button>

        </form>
    </div>
</template>
<style scoped>
.top-bar {
    padding: 100px 24px 0px 40px;
    font-size: 28px;
    display: flex;
}

.top-bar h1 {
    font-weight: 700;
    font-size: 28px;
    margin-left: 20px;
}

.editar-veiculo {
    min-height: 100vh;
    background: #fff;
}

.editar-form {
    padding: 50px 24px 20px 40px;
}

.form-group {
    margin-bottom: 26px;
}

.form-group label {
    display: block;
    font-size: 20px;
    font-weight: 500;
    color: #111;
    margin-bottom: 10px;
}

.form-group span {
    color: #F28715;
    margin-left: 2px;
}

.form-group input {
    width: 100%;
    height: 48px;

    padding: 0 12px;

    border: 1px solid #BDBDBD;
    border-radius: 5px;

    font-size: 15px;

    outline: none;

    box-sizing: border-box;
}

.form-group input::placeholder {
    color: #A9A9A9;
}

.btn-salvar {
    width: 100%;
    height: 48px;

    margin-top: 30px;

    background: #F28715;
    color: white;

    border: none;
    border-radius: 5px;

    font-size: 15px;
    font-weight: 500;

    cursor: pointer;
}

.btn-cancelar {
    width: 100%;
    height: 48px;

    margin-top: 16px;

    background: white;

    color: #F28715;

    border: 1px solid #F28715;
    border-radius: 5px;

    font-size: 15px;
    font-weight: 500;

    cursor: pointer;
}

.btn-salvar:active,
.btn-cancelar:active {
    transform: scale(.98);
}
</style>