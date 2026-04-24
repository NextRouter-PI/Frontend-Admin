<script setup>
import { ref, computed } from 'vue';
import { useTransporteStore } from '@/stores/useTransporteStore';
import AppHeader from '@/components/AppHeader.vue';
import AppBottomNavigationBar from '@/components/AppBottomNavigationBar.vue';
import { useRouter } from 'vue-router';

const store = useTransporteStore();
const busca = ref('');
const filtroAtivo = ref('Todas');

const veiculosFiltrados = computed(() => {
  const lista = store.veiculos || [];
  return lista.filter(v => {
    const correspondeBusca = v.placa.toLowerCase().includes(busca.value.toLowerCase()) ||
                             v.modelo.toLowerCase().includes(busca.value.toLowerCase());
    
    const statusParaFiltro = filtroAtivo.value === 'Ativas' ? 'Ativo' : filtroAtivo.value;
    const correspondeFiltro = filtroAtivo.value === 'Todas' || v.status === statusParaFiltro;
    
    return correspondeBusca && correspondeFiltro;
  });
});

const router = useRouter();
const cadastrar = () => {
  router.push('/veiculos/novo');
};

</script>

<template>
  <div class="view-wrapper">
    <AppHeader title="Veículos" show-back />

    <div class="content">
      <div class="search-container">
        <span class="mdi mdi-magnify search-icon"></span>
        <input 
          v-model="busca" 
          type="text" 
          placeholder="Busque por placa, modelo..." 
        />
      </div>

      <div class="filter-chips">
        <button 
          v-for="f in ['Todas', 'Ativas', 'Manutenção']" 
          :key="f"
          :class="['chip', { active: filtroAtivo === f }]"
          @click="filtroAtivo = f"
        >
          {{ f }}
        </button>
      </div>

      <div class="list-container">
        <div v-for="veiculo in veiculosFiltrados" :key="veiculo.id" class="transport-card">
          <div class="card-header">
            <div class="header-main">
              <h3>{{ veiculo.placa }}</h3>
              <p class="card-subtitle">{{ veiculo.modelo }}</p>
            </div>
            <button class="menu-dots">
              <span class="mdi mdi-dots-vertical"></span>
            </button>
          </div>
          
          <div class="card-details">
            <div class="detail-item">
              <span class="mdi mdi-seat-passenger" style="color: #000000;"></span>
              <span>{{ veiculo.capacidade }} Lugares </span>
            </div>
            <div class="detail-item">
              <span class="mdi mdi-account-outline" style="color: #000000;"></span>
              <span>{{ veiculo.motorista }}</span>
            </div>
          </div>
          
          <span :class="['status-tag', veiculo.status.toLowerCase()]">
            {{ veiculo.status }}
          </span>
        </div>
      </div>
    </div>

    <button class="fab-add" @click="cadastrar">
      <span class="mdi mdi-plus"></span>
    </button>

    <AppBottomNavigationBar />
  </div>
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
  padding: 10px 10px 10px 44px;
  border-radius: 10px;
  border: 1px solid #f97316;
  background-color: white;
  outline: none;
}

.filter-chips {
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
}

.chip {
  padding: 6px 16px;
  border-radius: 20px;
  border: 1px solid #d1d5db;
  background-color: white;
  font-size: 0.85rem;
}

.chip.active {
  background-color: #fff7ed;
  border-color: #f97316;
  color: #f97316;
}

.transport-card {
  background: white;
  border-radius: 16px;
  padding: 20px;
  margin-bottom: 14px;
  border: 1px solid #000000;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
}

.card-header h3 {
  font-size: 1.3rem;
  font-weight: 800;
  margin: 0;
  color: #111827;
}

.card-subtitle {
  color: #6b7280;
  font-size: 0.95rem;
  margin-top: 4px;
}

.card-details {
  display: flex;
  gap: 16px;
  margin: 12px 0;
}

.detail-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.8rem;
  color: #9ca3af;
}

.status-tag {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 8px;
  font-size: 0.80rem;
  font-weight: 700;
}

.status-tag.ativo { background-color: #BDFFAF; color: #2BFF59; }
.status-tag.manutenção { background-color: #FFBA70; color: #FF8E2B; }

.fab-add {
  position: fixed;
  bottom: 100px;
  right: 24px;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: #334155;
  color: white;
  border: none;
  font-size: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3);
}

.menu-dots {
  background: none;
  border: none;
  color: #d1d5db;
  font-size: 1.4rem;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
</style>