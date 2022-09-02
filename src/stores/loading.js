import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useLoadingStore = defineStore('loading', () => {
  const isLoading = ref(false);
  const mountLoading = () => (isLoading.value = true);
  const unmountLoading = (duration = 600) => {
    setTimeout(() => (isLoading.value = false), duration);
  };

  return { isLoading, mountLoading, unmountLoading };
});
