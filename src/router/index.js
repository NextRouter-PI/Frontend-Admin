import { createRouter, createWebHistory } from 'vue-router'

import VeiculosView from '@/views/VeiculosView.vue'
import RotasView from '@/views/RotasView.vue'
import HomeView from '@/views/HomeView.vue'
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
      path: '/veiculos',
      name: 'veiculos',
      component: VeiculosView,
    },
    {
      path: '/rotas',
      name: 'rotas',
      component: RotasView,
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

