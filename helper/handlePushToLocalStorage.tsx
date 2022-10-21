import type { MovieListResult } from "../types/MovieTypes";

const handlePushingToLocalStorage = (
  key: string,
  moviesList?: MovieListResult[]
) => {
  localStorage.setItem(key, JSON.stringify(moviesList));
};

const handleGetFromLocalStorage = (key: string) => {
  const result = localStorage.getItem(key);
  return JSON.parse(result ?? "{}");
};

export { handleGetFromLocalStorage, handlePushingToLocalStorage };
