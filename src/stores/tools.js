import { defineStore } from 'pinia';
import { reactive } from 'vue';
import { useRoute } from 'vue-router';
import { apiGetTools } from '@/api/toolsLoader';
import { apiGetTool } from '@/api/toolsLoader';
import { categories } from '@/const/categories';

export const useToolStore = defineStore('tools', () => {
  const tools = reactive({ categories: {} });

  const getTools = async () => {
    const result = await apiGetTools();
    tools.categories = result.data;
  };

  const categoryNames = categories.map((category) => category.name);
  const route = useRoute();
  const id = computed(() => route.params.id);
  const category = reactive({ data: {} });

  const watchCategoryChange = () =>
    watchEffect(async () => {
      category.data = {};

      if (categoryNames.indexOf(id.value) <= 0) return;

      const result = await apiGetTool(id.value);
      category.data = result.data;
    });

  return { getTools, tools, watchCategoryChange, category };
});
