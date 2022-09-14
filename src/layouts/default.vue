<template>
  <Navbar v-if="user.data.isAuthenticated" />
  <router-view />

  <Transition>
    <Loader v-if="isLoading" />
  </Transition>

  <Toast />
</template>

<script setup>
  import { useUtilStore } from '@/stores/utils';
  import { useUserStore } from '@/stores/users';
  import { useToolStore } from '@/stores/tools';
  import { usePackageStore } from '@/stores/packages';
  const { isLoading } = storeToRefs(useUtilStore());
  const { mountLoading, unmountLoading } = useUtilStore();
  const { user } = storeToRefs(useUserStore());
  const { getTools, clearTools } = useToolStore();
  const { getPackages, clearPackages } = usePackageStore();

  watchEffect(async () => {
    if (user.value.data.isAuthenticated) {
      mountLoading();
      await getTools();
      await getPackages();
      unmountLoading();
      return;
    }

    clearTools();
    clearPackages();
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
