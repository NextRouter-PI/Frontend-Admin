<script setup>
import { ref } from 'vue';
import { useTransporteStore } from '@/stores/useTransporteStore';
import {useRouter} from 'vue-router'

const router = useRouter();
const stores = useTransporteStore();

const veiculo = ref({
    placa: '',
    modelo: '',
    ano: '',
    capacidade: ''
});

const salvar = () => {
    stores.adicionarVeiculo({...veiculo.value});
    router.push('/lista')
}
</script>

<template>
    <div class="cadastrar-veiculo">
        <div class="content">
            <form @submit.prevent="salvar" class="cadastro">
                <div class="form-group">
                    <label>Placa <span>*</span></label>
                    <input v-model="veiculo.placa" placeholder="ABC1234" required />
                </div>

                <div class="form-group">
                    <label>Modelo <span>*</span></label>
                    <input v-model="veiculo.modelo" placeholder="Mercedes Sprinter" required />
                </div>

                <div class="form-group">
                    <label>Ano <span>*</span></label>
                    <input v-model="veiculo.ano" placeholder="2015" required />
                </div>

                <div class="form-group">
                    <label>Capacidade <span>*</span></label>
                    <input v-model="veiculo.capacidade" placeholder="Número de lugares" required />
                </div>
            </form>
        </div>
        <div class="salvar-cancelar">
            <button type="button" class="cancelar" @click="$router.back()">CANCELAR</button>
            <button type="button" class="salvar" @click="salvar">SALVAR</button>
        </div>
    </div>
</template>

<style scoped>
.cadastrar-veiculo {
    min-height: 100vh;
}
.content {
    padding: 24px 20px;
    margin-top: 100px;
}
.form-group {
    margin-bottom: 20px;
}
.form-group label {
    display: block;
    font-weight: 600;
    margin-bottom: 7px;
    font-size: 1rem;
    color: #000000;
}
.form-group label span {
    color: #f97316;
    margin-left: 2px;
}
.form-group input {
    width: 100%;
    padding: 10px;
    border-radius: 7px;
    border: 1px solid #000000;
    font-size: 1rem;
    outline: none;
}
.salvar-cancelar {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 20px;
}
.cancelar {
    color: #F28715;
    border: 1px solid #F28715;
    border-radius: 5px;
    padding: 7px;
    font-weight: 400;
}
.salvar {
    background-color: #F28715;
    color: #FFFFFF;
    border-radius: 5px;
    padding: 7px;
    font-weight: 400;
}
</style>