import { GetServerSideProps } from "next";
import { useState, useEffect } from "react";
import Head from "next/head";

import MovieList from "../components/MovieList";

import { getDiscoverMovies } from "../helper/getMovies";
import { Button } from "antd";

const useDiscover = (movies: any) => {
  const [currentMoviePage, setCurrentMoviePage] = useState(1);
  const [moviesList, setMoviesList] = useState(movies.results);

  const handlePushingToLocalStorage = (moviesList: any[]) => {
    localStorage.setItem("discoverMoviesList", JSON.stringify(moviesList));
  };

  const loadMoreMovies = async () => {
    if (movies.results === undefined) return;
    await getDiscoverMovies(currentMoviePage + 1).then((newMovies) => {
      const newMoviesList = [...moviesList, ...newMovies.results];
      setMoviesList(newMoviesList);
      handlePushingToLocalStorage(newMoviesList);
      setCurrentMoviePage(currentMoviePage + 1);
    });
  };

  useEffect(() => {
    if (moviesList !== undefined) {
      handlePushingToLocalStorage(moviesList);
      return;
    }

    const previousMoviesList = localStorage.getItem("discoverMoviesList");
    if (previousMoviesList) setMoviesList(JSON.parse(previousMoviesList));
  }, [moviesList]);

  return { moviesList, loadMoreMovies };
};

export default function Discover({ movies }: { movies: any }) {
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
