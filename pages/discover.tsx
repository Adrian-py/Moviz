import { GetServerSideProps } from "next";
import { useState, useEffect } from "react";
import { Button } from "antd";

// Components
import Head from "next/head";
import MovieList from "../components/MovieList";

// Helper Functions
import { getDiscoverMovies } from "../helper/getMovies";
import {
  handleGetFromLocalStorage,
  handlePushingToLocalStorage,
} from "../helper/handlePushToLocalStorage";

// Types
import type { MovieListTypes } from "../types/MovieTypes";

interface DiscoverPropsTypes {
  movies: MovieListTypes;
}

// Custom Hook for Discover
const useDiscover = (movies: MovieListTypes) => {
  const [currentMoviePage, setCurrentMoviePage] = useState(1);
  const [moviesList, setMoviesList] = useState(movies.results);

  // Handles loading more movies to the list
  const loadMoreMovies = async () => {
    if (movies.results === undefined) return;

    await getDiscoverMovies(currentMoviePage + 1).then((newMovies) => {
      const newMoviesList = [
        ...(moviesList ?? []),
        ...(newMovies.results ?? []),
      ];

      setMoviesList(newMoviesList);
      handlePushingToLocalStorage("discoverMoviesList", newMoviesList);
      setCurrentMoviePage(currentMoviePage + 1);
    });
  };

  // To check if there is previously generated list to use, if API call fail
  useEffect(() => {
    if (moviesList !== undefined) {
      handlePushingToLocalStorage("discoverMoviesList", moviesList);
      return;
    }

    const previousMoviesList = handleGetFromLocalStorage("discoverMoviesList");
    if (previousMoviesList) setMoviesList(previousMoviesList);
  }, [moviesList]);

  return { moviesList, loadMoreMovies };
};

export default function Discover({ movies }: DiscoverPropsTypes) {
  const { moviesList, loadMoreMovies } = useDiscover(movies);

  return (
    <>
      <Head>
        <title>Moviz | Discover</title>
      </Head>

      <MovieList
        title="Discover Movies"
        movies={moviesList ? moviesList : []}
      />

      <Button
        onClick={loadMoreMovies}
        className="w-full h-fit py-4 rounded-xl font-bold text-h3 text-floralWhite hover:text-prussianBlue focus:text-prussianBlue"
      >
        Load More
      </Button>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await getDiscoverMovies(1);

  return {
    props: {
      movies: res ? res : null,
    },
  };
};
