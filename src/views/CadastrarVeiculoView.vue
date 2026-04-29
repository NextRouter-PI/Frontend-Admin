<script setup>
import AppHeader from '@/components/AppHeader.vue';
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
    router.push('/veiculos')
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
        <div class="actions">
            <button type="button" class="cancelar" @click="$router.back()">CANCELAR</button>
            <button type="button" class="salvar" @click="salvar">SALVAR</button>
        </div>
    </div>
</template>

<style scoped>

</style>