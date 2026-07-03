<script setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useDeviceLayout } from "@/composables/useDeviceLayout";
import { useCompanyStore } from "@/stores/useCompanyStore";
import AppHeader from "./components/layout/AppHeader.vue";
import Sidebar from "./components/layout/AppSideBar.vue";
import AppBottomNavigationBar from "./components/layout/AppBottomNavigationBar.vue";

const { isMobile } = useDeviceLayout();
const route = useRoute()
const companyStore = useCompanyStore()

onMounted(() => {
  if (route.query.token) {
    companyStore.setToken(route.query.token)
    companyStore.fetchData()
  }
  if (route.query.company) {
    companyStore.setCompany(route.query.company)
  }
})
</script>

<template>
  <div class="app-layout">

    <AppHeader/>
    <Sidebar v-if="!isMobile" />

    <main class="content">
      <router-view />
    </main>

    <AppBottomNavigationBar v-if="isMobile" />

  </div>
</template>