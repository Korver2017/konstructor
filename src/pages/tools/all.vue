<template>
  <section v-for="category in categories" class="my-5 py-5">
    <div class="container mt-sm-5 mt-3">
      <Category :category="category" />
    </div>
  </section>
</template>

<script setup>
  import { useResourceStore } from '@/stores/resources.js';
  const { getResourceRequest, getResourceResult } = useResourceStore();
  const categories = [];

  onMounted(async () => {
    await getResourceRequest();
  });
</script>

<style scoped></style>
