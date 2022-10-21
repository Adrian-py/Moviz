import { MovieListTypes, MovieDetailTypes } from "../types/MovieTypes";

const getMovies = async (category: string) => {
  let list: MovieListTypes = {};

  await fetch(
    `https://api.themoviedb.org/3/movie/${category}?api_key=f93991664483bce387a4f9f9b8cb19cb&language=en-US&page=1`
  )
    .then(async (res) => {
      list = await res.json();
    })
    .catch((err) => err);

  return await list;
};

const getDiscoverMovies = async (page: number) => {
  let list: MovieListTypes = {};
  await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=f93991664483bce387a4f9f9b8cb19cb&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`
  )
    .then(async (res) => {
      list = await res.json();
    })
    .catch((err) => err);

  return await list;
};

const getMovieDetail = async (movieID?: string | string[]) => {
  let list: MovieDetailTypes = {};

  await fetch(`
    https://api.themoviedb.org/3/movie/${movieID}?api_key=f93991664483bce387a4f9f9b8cb19cb&language=en-US`)
    .then(async (res) => {
      list = await res.json();
    })
    .catch((err) => err);

  return await list;
};

export { getMovies, getDiscoverMovies, getMovieDetail };
