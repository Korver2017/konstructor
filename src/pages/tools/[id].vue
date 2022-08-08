<template>
  <section class="my-5 py-5">
    <div class="container mt-sm-5 mt-3">
      <Category :category="category" />
    </div>
  </section>
</template>

<script setup>
  import { categories } from '@/const/categories';
  import { useResourceStore } from '@/stores/resources.js';
  const { getResourceResult } = useResourceStore();
  const route = useRoute();

  const category = computed(() => {
    const matched = categories.find((c) => c.id == route.params.id);
    const data = {};
    data[matched.name] = getResourceResult.categories[matched.name];
    return data;
  });
</script>

<style scoped></style>
