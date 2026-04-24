import { createRouter, createWebHistory } from 'vue-router'

import VeiculosLista from '@/views/VeiculosLista.vue'
import CadastrarVeiculoView from '@/views/CadastrarVeiculoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: VeiculosLista,
    },
    {
      path: '/veiculos/novo',
      name: '/CadastrarVeiculo',
      component: CadastrarVeiculoView
    },
    {
      path: '/usuario',
      name: 'usuario',
      component: VeiculosLista,
    },
    {
      path: '/transporte',
      name: 'transporte',
      component: VeiculosLista,
    },
    {
      path: '/lista',
      name: 'lista',
      component: VeiculosLista,
    },
  ],
})

export default router

