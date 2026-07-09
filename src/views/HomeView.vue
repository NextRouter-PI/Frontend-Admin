<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useTransporteStore } from '@/stores/useTransporteStore'
import { Bar } from 'vue-chartjs'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
)

const chartData = {
  labels: ['08:00', '12:00', '17:00'],
  datasets: [
    {
      data: [22, 5, 19],
      backgroundColor: '#F18700',
      borderRadius: 0,
      barThickness: 38
    }
  ]
}

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,

  plugins: {
    legend: {
      display: false
    }
  },

  scales: {

    x: {
      grid: {
        display: false
      },

      ticks: {
        color: '#444',
        font: {
          size: 16,
          weight: '600'
        }
      },

      border: {
        color: '#444'
      }
    },

    y: {

      min: 0,
      max: 22,

      ticks: {
        stepSize: 2,
        color: '#444'
      },

      grid: {
        color: '#9b9b9b',
        lineWidth: 1
      },

      border: {
        display: false
      }

    }

  }

}

const router = useRouter()
const store = useTransporteStore()

const data = computed(() => {
  const hoje = new Date()

  return hoje.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit'
  })
})

const passageirosHoje = computed(() => {
  return store.veiculos.reduce((total, veiculo) => total + veiculo.capacidade, 0)
})

const ativos = computed(() => {
  return store.veiculos.filter(v => v.status === 'Ativo').length
})

const total = computed(() => store.veiculos.length)

const backHome = () => {
  router.push('/')
}
</script>

<template>
  <div class="view-wrapper">

    <div class="content">

      <div class="titulo">
        <h2>Gerenciamento:</h2>
        <span>{{ data }}</span>
      </div>

      <div class="cards-row">

        <div class="info-card">

          <span class="mdi mdi-account-group card-icon"></span>

          <div>
            <h4>Passageiros Hoje:</h4>
            <p>{{ passageirosHoje }}</p>
          </div>

        </div>

        <div class="info-card">

          <span class="mdi mdi-map-marker-path card-icon"></span>

          <div>
            <h4>Rotas Hoje:</h4>
            <p>8</p>
          </div>

        </div>

      </div>

      <div class="info-card grande">

        <span class="mdi mdi-van-passenger card-icon"></span>

        <div>
          <h4>Transportes Ativos:</h4>
          <p>{{ ativos }} / {{ total }}</p>
        </div>

      </div>

      <div class="grafico-card">


        <h2>Questionário 30/06</h2>

        <div class="chart-container">
          <Bar :data="chartData" :options="chartOptions" />
        </div>

        <button @click="backHome">
          VER DETALHES
        </button>

      </div>

    </div>

  </div>
</template>
<style scoped>
.view-wrapper {
  min-height: 100vh;
  padding-top: 75px;
  padding-bottom: 90px;
  background: var(--background);
}

.content {
  padding: 18px;
}

.titulo h2 {
  margin: 0;
  font-size: 2rem;
  font-weight: 700;
}

.titulo span {
  font-size: 1.3rem;
}

.cards-row {
  display: flex;
  gap: 12px;
  margin-top: 28px;
}

.info-card {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 22px;
  border: 1px solid #bdbdbd;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .18);
}

.grande {
  margin-top: 18px;
}

.card-icon {
  color: #F18700;
  font-size: 46px;
}

.info-card h4 {
  margin: 0;
  font-size: 18px;
}

.info-card p {
  margin-top: 8px;
  font-size: 22px;
}

.chart-container {
  height: 280px;
  margin: 25px 0;
}

.grafico-card button {
  float: right;
}

.grafico-card h2 {
  margin: 30px 0 30px 0;
}

.grafico {
  position: relative;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
button {
  margin-top: 25px;
  float: right;
  background: #F18700;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
}
</style>