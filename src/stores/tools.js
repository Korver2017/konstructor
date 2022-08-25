import { defineStore } from 'pinia';
import { computed, reactive } from 'vue';
import { useRoute } from 'vue-router';
import { apiGetTools } from '@/api/toolsLoader';
import { mountLoading, unmountLoading } from '@/composition-api/useLoading';
import { tools as menu } from '@/const/menus';
import { CREATE_BLOCK } from '@vue/compiler-core';

export const useToolStore = defineStore('tools', () => {
  const tools = reactive({ categories: {} });

  const getTools = async () => {
    mountLoading();
    const result = await apiGetTools();
    tools.categories = result.data;
    unmountLoading();
  };

  const menuItems = menu.map((item) => item.name);
  const route = useRoute();
  const tool = computed(() => route.params.tool);
  const category = reactive({ data: {} });

  // Watch for router changes and update category data.
  const getTool = () =>
    watchEffect(async () => {
      // When leaving the page or route is not match to any menu item, return.
      if (menuItems.indexOf(tool.value) < 0) return;

      const categoryData = tools.categories[tool.value];
      if (!categoryData) return (category.data = { ...tools.categories });

      category.data = {};
      category.data[tool.value] = categoryData;
    });

  return { getTools, tools, getTool, category };
});
