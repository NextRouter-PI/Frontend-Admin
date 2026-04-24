<script setup>
import AppHeader from './components/AppHeader.vue';
import AppBottomNavigationBar from './components/AppBottomNavigationBar.vue';
</script>

<template>
  <div id="app">
    <AppHeader />
    <router-view />
    <AppBottomNavigationBar />
  </div>
</template>