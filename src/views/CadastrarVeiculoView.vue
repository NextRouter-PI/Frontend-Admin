<script setup>
import { ref } from 'vue';
import { useTransporteStore } from '@/stores/useTransporteStore';
import { useRouter } from 'vue-router'

const router = useRouter();
const stores = useTransporteStore();

const veiculo = ref({
    placa: '',
    modelo: '',
    ano: '',
    capacidade: ''
});

const salvar = () => {
    stores.adicionarVeiculo({ ...veiculo.value });
    router.push('/lista')
}
</script>

<template>
    <div class="top-bar">
        <button class="back-button" @click="$router.back()">
            <span class="fa-solid fa-arrow-left" style="color: rgb(0, 0, 0);"></span>
        </button>
        <h1>Cadastrar Veículo</h1>
    </div>
    <div class="cadastrar-veiculo">
        <form @submit.prevent="salvar" class="cadastro">

            <div class="form-group">
                <label>Placa<span>*</span></label>
                <input v-model="veiculo.placa" placeholder="ABC 1234" required />
            </div>

            <div class="form-group">
                <label>Modelo<span>*</span></label>
                <input v-model="veiculo.modelo" placeholder="Mercedes Sprinter" required />
            </div>

            <div class="form-group">
                <label>Ano<span>*</span></label>
                <input v-model="veiculo.ano" placeholder="2015" required />
            </div>

            <div class="form-group">
                <label>Capacidade<span>*</span></label>
                <input v-model="veiculo.capacidade" placeholder="Número de lugares" required />
            </div>

            <button class="btn-salvar" type="submit">
                SALVAR
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

.cadastrar-veiculo {
    min-height: 100vh;
    background: #fff;
}

.cadastro {
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