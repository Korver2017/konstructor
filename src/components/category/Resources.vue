<template>
  <div class="col-lg-9">
    <div class="row">
      <Resource
        v-for="resource in resources"
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
  import { useResourcesStore } from '@/stores/resources.js';
  const { resources } = useResourcesStore();
</script>

<style scoped></style>
