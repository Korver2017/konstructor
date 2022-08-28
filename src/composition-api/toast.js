const toast = () => {
  const isShown = ref(false);
  const mountToast = () => (isShown.value = true);
  const unmountToast = () => (isShown.value = false);

  return { isShown, mountToast, unmountToast };
};

export { toast };
