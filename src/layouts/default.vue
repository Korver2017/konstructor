<template>
  <Navbar v-if="userStore.user.isAuthenticated" />
  <router-view />
</template>

<script setup>
  import { useUserStore } from '@/stores/users.js';
  const userStore = useUserStore();
</script>

<style scoped></style>
