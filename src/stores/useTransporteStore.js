import { defineStore } from 'pinia';

export const useTransporteStore = defineStore('transporte', {
    state: () => ({
        veiculos: [
            {id: 1, placa: 'QHN6712', modelo: 'Mercedes Sprinter', capacidade: 18, motorista: 'Roberto Carlos', status: 'Ativo'},
            {id: 2, placa: 'QHN6713', modelo: 'Mercedes Sprinter', capacidade: 18, motorista: 'Roberto Carlos', status: 'Manutenção'},
            {id: 3, placa: 'QHN6714', modelo: 'Mercedes Sprinter', capacidade: 18, motorista: 'Roberto Carlos', status: 'Ativo'},
            {id: 4, placa: 'QNH6715', modelo: 'Mercedes Sprinter', capacidade: 18, motorista: 'Roberto Carlos', status: 'Ativo'}
        ]
    })
});