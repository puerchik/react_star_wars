export const getLoacalStorage = (key: string) => {
  const data = localStorage.getItem(key);
  if (data) {
    return JSON.parse(data);
  }
  return {};
};

export const setLoacalStorage = (key: string, data: string) => {
  localStorage.setItem(key, data);
};
