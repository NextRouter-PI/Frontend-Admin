<script setup>
import { computed } from 'vue'
import Logo from "@/assets/logo.png"
import { RouterLink } from "vue-router";
import { useCompanyStore } from "@/stores/useCompanyStore";

const companyStore = useCompanyStore()
const companyName = computed(() => companyStore.name)

function logout() {
  companyStore.clearCompany()
  window.location.href = import.meta.env.VITE_LOGIN_URL
}
</script>

<template>
  <aside class="sidebar">

    <RouterLink :to="`/`" class="logo">
      <div class="logo-content">
        <img :src="Logo" alt="Logo">
        <h1>{{ companyName || 'NextRouter' }}</h1>
      </div>
    </RouterLink>

    <nav class="nav">

      <router-link :to="`/`" class="nav-item" title="Home">
        <span class="mdi mdi-home"></span>
        <small>Home</small>
      </router-link>

      <router-link :to="`/usuario`" class="nav-item" title="Usuário">
        <span class="mdi mdi-account-circle"></span>
        <small>Usuário</small>
      </router-link>

      <router-link :to="`/transporte`" class="nav-item" title="Transporte">
        <span class="mdi mdi-bus"></span>
        <small>Transporte</small>
      </router-link>

      <router-link :to="`/lista`" class="nav-item" title="Lista">
          <span class="mdi mdi-map-outline"></span>
        <small>Lista</small>
      </router-link>

    </nav>

    <div class="nav logout-section">
      <button class="nav-item logout-item" @click="logout" title="Sair">
        <span class="mdi mdi-logout"></span>
        <small>Sair</small>
      </button>
    </div>
  </aside>
</template>

<style scoped>
.logout-section {
  margin-top: auto;
  padding-bottom: 20px;
}

.logout-item {
  background: none;
  border: none;
  cursor: pointer;
  width: 100%;
  font-size: inherit;
  font-family: inherit;
  color: var(--text-muted);
}

.logout-item:hover span {
  color: #d32f2f !important;
}
</style>

<style scoped>
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100px;
  height: 100vh;
  background: var(--superfice);

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 20px 0;
  gap: 30px;

  border-right: 1px solid var(--border-primary);
  box-shadow: 8px 0 30px var(--shadow);

  transition: width 0.4s ease;
  overflow: hidden;
}

.sidebar:hover {
  width: 230px;
}

.logo {
  width: 100%;
  text-decoration: none;
}

.logo-content {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 18px;
}

.logo-content img {
  width: 40px;
}

.logo-content h1 {
  font-size: 18px;
  font-weight: 600;
  color: #fff;

  opacity: 0;
  transform: translateX(-10px);
  transition: 0.3s;
  white-space: nowrap;
}

.sidebar:hover .logo-content h1 {
  opacity: 1;
  transform: translateX(0);
}

.nav {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.nav-item {
  position: relative;
  text-decoration: none;
  color: var(--text-muted);

  display: flex;
  align-items: center;
  gap: 14px;

  width: 90%;
  padding: 10px 12px;

  border-radius: 12px;
  transition: 0.25s;
}

.nav-item::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 12px;

  background: var(--gradient-primary-hover);

  opacity: 0;
  transition: 0.25s;
}

.nav-item:hover::before {
  opacity: 1;
}

.nav-item::after {
  content: "";
  position: absolute;
  left: -8px;
  top: 50%;
  transform: translateY(-50%);

  width: 4px;
  height: 0%;

  background: var(--gradient-primary);
  border-radius: 10px;

  transition: 0.3s;
}

.nav-item.router-link-active::after {
  height: 60%;
}

.nav-item span {
  width: 42px;
  height: 42px;
  min-width: 42px;
  min-height: 42px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 20px;

  border-radius: 50%;
  background: transparent;

  transition: all 0.3s ease;
}

.nav-item small {
  opacity: 0;
  transform: translateX(-10px);

  transition: 0.25s;
  white-space: nowrap;
}

.sidebar:hover .nav-item small {
  opacity: 1;
  transform: translateX(0);
}

.nav-item:hover span {
  color: var(--primary);
  transform: scale(1.1);
}

.nav-item.router-link-active {
  color: #fff;
}

.nav-item.router-link-active span {
  color: var(--superfice);
  background: var(--gradient-primary);

  box-shadow: var(--shadow-primary);

  transform: scale(1.1);
}

.nav-item:active {
  transform: scale(0.95);
}
</style>
