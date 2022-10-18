import { GetServerSideProps } from "next";
import { useState } from "react";

import MovieList from "../components/MovieList";

import { discoverMovies } from "../helper/getMovies";

export default function Discover({ movies }: { movies: any }) {
  const [currentMoviePage, setCurrentMoviePage] = useState(1);
  const [moviesList, setMoviesList] = useState([...movies.results]);

  const loadMoreMovies = async () => {
    const newMoviesList = await discoverMovies(currentMoviePage + 1);

    setMoviesList([...moviesList, ...newMoviesList.results]);
    setCurrentMoviePage(currentMoviePage + 1);
  };

  return (
    <>
      <MovieList title="Discover Movies" movies={moviesList} />
      <button
        onClick={loadMoreMovies}
        className="w-full py-4 bg-floralWhite text-richBlack text-h3 font-bold font-montserrat rounded-lg ease-in-out duration-150 hover:bg-prussianBlue hover:text-floralWhite hover:border-2 hover:border-floralWhite"
      >
        Load More
      </button>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await discoverMovies(1);
  return {
    props: {
      movies: res,
    },
  };
};
