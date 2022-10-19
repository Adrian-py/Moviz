const handlePushingToLocalStorage = (key: string, moviesList: any[]) => {
  localStorage.setItem(key, JSON.stringify(moviesList));
};

const handleGetFromLocalStorage = (key: string) => {
  const result = localStorage.getItem(key);
  return JSON.parse(result ? result : "");
};

export { handleGetFromLocalStorage, handlePushingToLocalStorage };
