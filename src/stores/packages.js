import { defineStore } from 'pinia';
import { reactive } from 'vue';
import { useRoute } from 'vue-router';
import { apiGetPackages } from '@/api/packagesLoader';
import { apiGetPackage } from '@/api/packagesLoader';
import { mountLoading, unmountLoading } from '@/composition-api/useLoading';
import { packages as menu } from '@/const/menus';

export const usePackageStore = defineStore('packages', () => {
  const packages = reactive({ categories: {} });

  const getPackages = async () => {
    mountLoading();
    const result = await apiGetPackages();
    packages.categories = result.data;
    unmountLoading();
  };

  const menuItems = menu.map((item) => item.name);
  const route = useRoute();
  const source = computed(() => route.params.package);
  const category = reactive({ data: {} });

  // Watch for router changes and update category data.
  const watchCategoryChanged = () =>
    watchEffect(async () => {
      // When leaving the page or route is not match to any menu item, return.
      if (menuItems.indexOf(source.value) < 0) return;
      mountLoading();
      category.data = {};

      const result = await apiGetPackage(source.value);
      category.data = result.data;
      unmountLoading();
    });

  return { getPackages, packages, watchCategoryChanged, category };
});
