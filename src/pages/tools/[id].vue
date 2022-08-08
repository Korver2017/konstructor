<template>
  <h1>ID: {{ props.id }}</h1>
  <h1>{{ name }}</h1>
</template>

<script setup>
  import { categories } from '@/const/categories';
  const props = defineProps({
    id: {
      type: [String, Number],
    },
  });

  const category = categories.find((c) => c.id == props.id);
  // const name = category.name;
</script>

<style scoped></style>
