import { defineStore } from 'pinia';
import { reactive } from 'vue';
import { apiGetTools } from '@/api/toolsLoader';

export const useToolStore = defineStore('tools', () => {
  const tools = reactive({ categories: {} });

  const getTools = async () => {
    const result = await apiGetTools();
    tools.categories = result.data;
  };

  return { getTools, tools };
});
