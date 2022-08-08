<template>
  <div
    v-for="(resources, key, idx) in getResourceResult.categories"
    :key="idx"
    class="row"
  >
    <div class="col-lg-3">
      <div
        class="position-sticky pb-lg-5 pb-3 mt-lg-0 mt-5 ps-2"
        style="top: 100px"
      >
        <h3>{{ key }}</h3>
        <h6 class="text-secondary font-weight-normal pe-3">
          A selection of 45 page sections that fit perfectly in any combination
        </h6>
      </div>
    </div>
    <div class="col-lg-9">
      <div class="row mt-3">
        <Resource
          v-for="resource in resources"
          :resource="resource"
          :key="resource.id"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
  import { useResourceStore } from '@/stores/resources.js';
  const { getResourceResult } = useResourceStore();
</script>

<style scoped></style>
