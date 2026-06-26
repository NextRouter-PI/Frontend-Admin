<script setup>
defineProps(['status']);
</script>

<template>
  <span :class="['badge', status.toLowerCase()]">{{ status }}</span>
</template>

<style scoped>
.badge {
  display: inline-block;
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: bold;
  text-transform: capitalize;
}
.ativo { background-color: rgba(22, 249, 33, 0.1); color: var(--primary); }
.manutenção { background-color: #ffe0e0; color: #d00; }
</style>