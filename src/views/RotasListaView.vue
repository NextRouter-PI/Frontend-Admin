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
    const correspondeBusca =
      r.origem.toLowerCase().includes(busca.value.toLowerCase()) ||
      r.destino.toLowerCase().includes(busca.value.toLowerCase()) ||
      r.horario.toLowerCase().includes(busca.value.toLowerCase());

    const correspondeFiltro =
        filtroAtivo.value === 'Todas' ||
        r.horario.startsWith('12') && filtroAtivo.value === '12h' ||
        r.horario.startsWith('17') && filtroAtivo.value === '17h';

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
                  <div v-for="rota in rotasFiltradas" :key="rota.id" class="transport-card"></div>
                  <div class="header">
                  
                  
                  </div>
            </div>
        </div>
    </div>
        <AppBottomNavigationBar />

</template>

<style scoped>
.view-wrapper {
  min-height: 100vh;
  font-family: 'Inter', sans-serif;
  padding: 80px 0
}

.content { 
  padding-bottom: 120px; 
}

/* Busca */
.search-container {
  position: relative;
  margin-bottom: 16px;
}

.search-icon {
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  color: #9ca3af;
}

.search-container input {
  width: 100%;
  padding: 12px 12px 12px 44px;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  background-color: white;
  outline: none;
}
</style>