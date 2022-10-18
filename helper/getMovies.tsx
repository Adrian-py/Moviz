const getMovies = async (category: string) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${category}?api_key=f93991664483bce387a4f9f9b8cb19cb&language=en-US&page=1`
  );

  return await res.json();
};

const discoverMovies = async (page: number) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=f93991664483bce387a4f9f9b8cb19cb&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`
  );

  return await res.json();
};

export { getMovies, discoverMovies };
