<template>
  <section class="my-5 py-5">
    <div class="container mt-sm-5 mt-3">
      <Category v-if="Object.keys(category.data).length" :category="category" />
    </div>
  </section>
</template>

<script setup>
  import { usePackageStore } from '@/stores/packages';
  const { getPackage } = usePackageStore();
  const { category } = storeToRefs(usePackageStore());

  getPackage();
</script>

<style scoped></style>
