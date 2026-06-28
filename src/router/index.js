import { createRouter, createWebHistory } from 'vue-router'

import VeiculosLista from '@/views/VeiculosLista.vue'
import HomeView from '@/views/HomeView.vue'
import TransportView from '@/views/TransportView.vue'
import UserView from '@/views/UserView.vue'
import CadastrarVeiculoView from '@/views/CadastrarVeiculoView.vue'
import EditarVeiculoView from '@/views/EditarVeiculoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/usuario',
      name: 'usuario',
      component: UserView,
    },
    {
      path: '/transporte',
      name: 'transporte',
      component: TransportView,
    },
    {
      path: '/lista',
      name: 'lista',
      component: VeiculosLista,
    },
    {
      path: '/cadastro-veiculo',
      name: 'cadastro-veiculo',
      component: CadastrarVeiculoView 
    },
    {
    path: '/veiculos/editar/:id',
    name: 'editar-veiculo',
    component: EditarVeiculoView
    }
  ],
})

export default router

