const isShown = ref(false);
const hideToast = () => {
  isShown.value = false;
};
const showToast = () => {
  isShown.value = true;
};

export { isShown, hideToast, showToast };
