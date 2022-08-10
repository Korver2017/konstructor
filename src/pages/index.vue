<template>
  <Header />
</template>

<script setup>
  import { useToolStore } from '@/stores/tools';
  const { getTools } = useToolStore();

  onMounted(() => {
    getTools();
  });
</script>

<style scoped></style>
