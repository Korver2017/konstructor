<template>
  <div v-for="(val, key, idx) in getResourceResult.categories" class="row">
    <Description :label="key" />
    <Resources :resources="val" />
  </div>
</template>

<script setup>
  import { useResourceStore } from '@/stores/resources.js';
  const { getResourceResult } = useResourceStore();
</script>

<style scoped></style>
