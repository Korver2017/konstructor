import { defineStore } from 'pinia';
import { reactive, ref, computed } from 'vue';
import { apiGetResourceRequest } from '@/api/index.js';

export const useResourcesStore = defineStore('resources', () => {
  const apiResult = reactive([]);
  apiGetResourceRequest().then((res) => {
    apiResult.push(...res.data);
  });
  const resources = computed(() => {
    return apiResult;
  });

  return { resources };
});
