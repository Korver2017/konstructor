import { defineStore } from 'pinia';
import { reactive } from 'vue';
import { useRoute } from 'vue-router';
import { apiGetPackages } from '@/api/packagesLoader';
import { apiGetPackage } from '@/api/packagesLoader';
import { packages as menu } from '@/const/menus';

export const usePackageStore = defineStore('packages', () => {
  const packages = reactive({ categories: {} });

  const getPackages = async () => {
    const result = await apiGetPackages();
    packages.categories = result.data;
  };

  const menuItems = menu.map((item) => item.name);
  const route = useRoute();
  const id = computed(() => route.params.id);
  const category = reactive({ data: {} });

  // Watch for router changes and update category data.
  const watchCategoryChanged = () =>
    watchEffect(async () => {
      category.data = {};

      // When leaving the page or route is not match to any menu item, return.
      if (menuItems.indexOf(id.value) < 0) return;

      const result = await apiGetPackage(id.value);
      category.data = result.data;
    });

  return { getPackages, packages, watchCategoryChanged, category };
});
