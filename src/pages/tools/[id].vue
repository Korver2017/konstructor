<template>
  <section class="my-5 py-5">
    <div class="container mt-sm-5 mt-3">
      <Category :category="category" />
    </div>
  </section>
</template>

<script setup>
  import { useResourceStore } from '@/stores/tools';
  const { tools } = useResourceStore();
  const route = useRoute();

  const category = computed(() => {
    const id = route.params.id;
    return tools.categories[id];
  });
</script>

<style scoped></style>
