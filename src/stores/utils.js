import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUtilStore = defineStore('utils', () => {
  const isLoading = ref(false);
  const mountLoading = () => (isLoading.value = true);
  const unmountLoading = (duration = 600) => {
    setTimeout(() => (isLoading.value = false), duration);
  };

  const isShown = ref(false);
  const mountToast = () => (isShown.value = true);
  const unmountToast = () => (isShown.value = false);

  return {
    isLoading,
    mountLoading,
    unmountLoading,
    isShown,
    mountToast,
    unmountToast,
  };
});
