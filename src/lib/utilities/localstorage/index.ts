export const writeToLocal = (key: string, value: any) => {
  window.localStorage.setItem(key, JSON.stringify(value));
};

export const readFromLocal = (key: string) => {
  return window.localStorage.getItem(key);
};
