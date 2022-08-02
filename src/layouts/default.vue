<template>
  <Navbar v-if="userStore.postUserResult.user.isAuthenticated" />
  <router-view />
</template>

<script setup>
  import { useUserStore } from '@/stores/users';
  const userStore = useUserStore();
</script>

<style scoped></style>
