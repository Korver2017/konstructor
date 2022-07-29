import { defineStore } from 'pinia';
import { reactive } from 'vue';
import { apiGetResourceRequest } from '@/api/index.js';

export const useResourceStore = defineStore('resources', () => {
  const getResourceResult = reactive({ resources: [] });
  const getResourceRequest = async () => {
    const result = await apiGetResourceRequest();
    getResourceResult.resources = [...result.data];
  };

  return { getResourceRequest, getResourceResult };
});
