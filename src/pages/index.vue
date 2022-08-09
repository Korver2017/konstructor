<template>
  <Header />
</template>

<script setup>
  import { useResourceStore } from '@/stores/resources.js';
  const { getResourceRequest } = useResourceStore();

  onMounted(() => {
    getResourceRequest();
  });
</script>

<style scoped></style>
