<template>
  <Navbar v-if="user.data.isAuthenticated" />
  <router-view />

  <Transition>
    <Loader v-if="isLoading" />
  </Transition>
</template>

<script setup>
  import { useLoading } from '@/composition-api';
  import { useUserStore } from '@/stores/users';
  import { useToolStore } from '@/stores/tools';
  import { usePackageStore } from '@/stores/packages';
  const { isLoading, mountLoading, unmountLoading } = useLoading();
  const { user } = storeToRefs(useUserStore());
  const { getTools } = useToolStore();
  const { getPackages } = usePackageStore();

  onMounted(async () => {
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
