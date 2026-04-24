import { createRouter, createWebHistory } from 'vue-router'

import VeiculosLista from '@/views/VeiculosLista.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: VeiculosLista,
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

