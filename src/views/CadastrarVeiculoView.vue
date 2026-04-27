<script setup>
import AppHeader from '@/components/AppHeader.vue';
import { ref } from 'vue';

const veiculo = ref({
    placa: '',
    modelo: '',
    ano: '',
    capacidade: ''
});

const salvar = () => {
    console.log('Salvar veículo', veiculo.value);
}
</script>

<template>
    <div class="cadastrar-veiculo">
        <AppHeader title="Cadastrar Veículo" :show-back="true" />

        <div class="content">
            <form @submit.prevent="salvar" class="cadastro">
                <div class="form-group">
                    <label>Placa <span>*</span></label>
                    <input v-model="veiculo.placa" placeholder="ABC 123" required />
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
            <button type="button" class="cancelar" @click="$router.back()">Cancelar</button>
            <button type="button" class="salvar" @click="salvar">Salvar</button>
        </div>
    </div>
</template>

<style scoped>
.cadastrar-veiculo {
    display: flex;
    flex-direction: column;
    height: 100vh;
}
</style>