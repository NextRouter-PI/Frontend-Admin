<script setup>
import { ref, computed } from 'vue';
import { useRotasStore } from '@/stores/useRotasStore';
import AppHeader from '@/components/AppHeader.vue';
import AppBottomNavigationBar from '@/components/AppBottomNavigationBar.vue';

const store = useRotasStore();
const busca = ref('');
const filtroAtivo = ref('Todas');

const rotasFiltradas = computed(() => {
  const lista = store.rotas || [];
  return lista.filter(r => {
    const correspondeBusca = r.origem.toLowerCase().includes(busca.value.toLowerCase()) ||
                             r.destino.toLowerCase().includes(busca.value.toLowerCase()) ||
                             r.horario.toLowerCase().includes(busca.value.toLowerCase());
    
    const statusParaFiltro = filtroAtivo.value === 'Ativas' ? 'Ativo' : filtroAtivo.value;
    const correspondeFiltro = filtroAtivo.value === 'Todas' || r.status === statusParaFiltro;
    
    return correspondeBusca && correspondeFiltro;
  });
});

</script>

<template>
    <div class="view-wrapper">
        <AppHeader title="Rotas" show-back />
    
        <div class="content">
            <div class="search-container">
                <span class="mdi mdi-magnify search-icon"></span>
                <input 
                    v-model="busca" 
                    type="text" 
                    placeholder="Busque por origem, destino, horário..." 
                />
            </div>

            <div class="filter-chips">
                <button 
                    v-for="f in ['Todas', '12h', '17h']" 
                    :key="f"
                    :class="['chip', { active: filtroAtivo === f }]"
                    @click="filtroAtivo = f"
                >
                    {{ f }}
                </button>
            </div>

            <div class="list-container">
                <div v-for="rota in rotasFiltradas" :key="rota.id" class="transport-card">
                    <div class="card-header">
                        <div class="header-main">
                            <h3>{{ rota.origem }} → {{ rota.destino }}</h3>
                            <p class="card-subtitle">{{ rota.horario }}</p>
                        </div>
                        <button class="menu-dots">
                            <span class="mdi mdi-dots-vertical"></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
        <AppBottomNavigationBar />

</template>

<style scoped>

</style>