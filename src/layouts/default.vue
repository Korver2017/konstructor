<template>
  <div @click="handleCollapseMenu($event)">
    <Navbar
      ref="navbar"
      :menuIsCollapsed="menuIsCollapsed"
      @handleToggleCollapsed="handleToggleCollapsed"
      v-if="user.data.isAuthenticated"
    />
    <router-view />

    <Transition>
      <Loader v-if="isLoading" />
    </Transition>

    <Toast />
  </div>
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

  const navbar = ref(null);
  const menuIsCollapsed = ref(true);
  const handleCollapseMenu = ($event) => {
    if (!navbar.value) return;
    if (!navbar.value.$el.contains($event.target)) menuIsCollapsed.value = true;
  };
  const handleToggleCollapsed = (isCollapsed) =>
    (menuIsCollapsed.value = isCollapsed);
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
