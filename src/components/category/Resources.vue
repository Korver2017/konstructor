<template>
  <div class="col-lg-9">
    <div class="row">
      <Resource
        v-for="resource in getResourceResult.resources"
        :key="resource.url"
        :resource="resource"
      />
    </div>
    <div class="row mt-3">
      <Resource />
    </div>
  </div>
</template>

<script setup>
  import { useResourceStore } from '@/stores/resources.js';
  const { getResourceRequest, getResourceResult } = useResourceStore();
  onMounted(() => {
    getResourceRequest();
  });
</script>

<style scoped></style>
