const isLoading = ref(false);
const mountLoading = () => (isLoading.value = true);
const unmountLoading = (duration = 600) => {
  setTimeout(() => {
    isLoading.value = false;
  }, duration);
};

export { isLoading, mountLoading, unmountLoading };
