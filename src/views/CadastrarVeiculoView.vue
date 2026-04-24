<script setup>
import AppHeader from '@/components/AppHeader.vue';
import { ref } from 'vue';

const veiculo = ref({
    placa: '',
    modelo: '',
    ano:'',
    capacidade:''
});

const salvar = () => {
    console.log('Salvar veículo', veiculo.value);
}
</script>

<template>
    <div class="view-wrapper">
        <AppHeader title="Cadastrar" 
    </div>
</template>

<style scoped>
</style>