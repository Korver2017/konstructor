<template>
  <section class="my-5 py-5">
    <div class="container mt-sm-5 mt-3">
      <Category v-if="Object.keys(category.data).length" :category="category" />
    </div>
  </section>
</template>

<script setup>
  import { useUserStore } from '@/stores/users';
  const { user } = storeToRefs(useUserStore());
  const category = reactive({ data: {} });

  category.data = user.value.data.favorites;
</script>

<style scoped></style>
