import { defineStore } from 'pinia';
import { reactive } from 'vue';
import { useRoute } from 'vue-router';
import { apiGetPackages } from '@/api/packagesLoader';
import { packages as menu } from '@/const/menus';

export const usePackageStore = defineStore('packages', () => {
  const packages = reactive({ categories: {} });

  const getPackages = async () => {
    try {
      const result = await apiGetPackages();
      packages.categories = result.data;
    } catch (error) {
      console.log(error);
    }
  };

  const menuItems = menu.map((item) => item.name);
  const route = useRoute();
  const packageType = computed(() => route.params.package);
  const category = reactive({ data: {} });

  // Watch for router changes and update category data.
  const getPackage = () =>
    watchEffect(async () => {
      // When leaving the page or route is not match to any menu item, return.
      if (menuItems.indexOf(packageType.value) < 0) return;

      const categoryData = packages.categories[packageType.value];
      if (!categoryData) return (category.data = { ...packages.categories });

      category.data = {};
      category.data[packageType.value] = categoryData;
    });

  const clearPackages = () => (packages.categories = {});

  return { getPackages, packages, getPackage, clearPackages, category };
});
