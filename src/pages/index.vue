<template>
  <Header />
</template>

<script setup>
  import { useUserStore } from '@/stores/users.js';
  const { postUserRequest } = useUserStore();
  onMounted(() => {
    postUserRequest();
  });
</script>

<style scoped></style>
