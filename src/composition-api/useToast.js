const isShown = ref(false);
const mountToast = () => (isShown.value = true);
const unmountToast = () => (isShown.value = false);

export { isShown, mountToast, unmountToast };
