<template>
  <Navbar v-if="userStore.user.data.isAuthenticated" />
  <router-view />

  <Transition>
    <Loader v-if="isLoading" />
  </Transition>
</template>

<script setup>
  import { isLoading } from '@/composition-api/useLoading';
  import { mountLoading, unmountLoading } from '@/composition-api/useLoading';
  import { useUserStore } from '@/stores/users';
  import { useToolStore } from '@/stores/tools';
  import { usePackageStore } from '@/stores/packages';
  const userStore = useUserStore();
  const toolStore = useToolStore();
  const packageStore = usePackageStore();
  const { getTools } = toolStore;
  const { getPackages } = packageStore;

  onMounted(async () => {
    if (!userStore.user.data.isAuthenticated) return;

    mountLoading();

    await getTools();
    await getPackages();

    unmountLoading();
  });
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
