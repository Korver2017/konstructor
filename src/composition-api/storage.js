const storage = () => {
  const setItem = (key, val) => {
    const data = JSON.stringify(val);
    localStorage.setItem(key, data);
  };

  const getItem = (key) => JSON.parse(localStorage.getItem(key));

  return { setItem, getItem };
};

export { storage };
