<template>
  <section class="my-5 py-5">
    <div class="container mt-sm-5 mt-3">
      <Category />
    </div>
  </section>
</template>

<script setup>
  import { useResourceStore } from '@/stores/resources.js';
  const { getResourceRequest } = useResourceStore();

  onMounted(() => {
    getResourceRequest();
  });
</script>

<style scoped></style>
