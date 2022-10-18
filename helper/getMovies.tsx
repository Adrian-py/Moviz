const getMovies = async (category: string) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${category}?api_key=f93991664483bce387a4f9f9b8cb19cb&language=en-US&page=1`
  );

  const movies: any = await res.json();

  return movies;
};

export { getMovies };
