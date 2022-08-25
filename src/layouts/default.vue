<template>
  <Navbar v-if="userStore.user.data.isAuthenticated" />
  <router-view />

  <Transition>
    <Loader v-if="isLoading" />
  </Transition>
</template>

<script setup>
  import { useUserStore } from '@/stores/users';
  const userStore = useUserStore();
  import { isLoading } from '@/composition-api/useLoading';
</script>

<style scoped>
  .v-enter-from,
  .v-enter-to {
    opacity: 1;
  }
  .v-leave-from {
    opacity: 1;
  }
  .v-leave-active {
    transition: opacity 0.5s ease;
  }
  .v-leave-to {
    opacity: 0;
  }
</style>
