import { GetServerSideProps } from "next";
import { useState } from "react";
import Head from "next/head";

import MovieList from "../components/MovieList";

import { getDiscoverMovies } from "../helper/getMovies";
import { Button } from "antd";

export default function Discover({ movies }: { movies: any }) {
  const [currentMoviePage, setCurrentMoviePage] = useState(1);
  const [moviesList, setMoviesList] = useState([...movies.results]);

  const loadMoreMovies = async () => {
    const newMoviesList = await getDiscoverMovies(currentMoviePage + 1);

    setMoviesList([...moviesList, ...newMoviesList.results]);
    setCurrentMoviePage(currentMoviePage + 1);
  };

  return (
    <>
      <Head>
        <title>Moviz | Discover</title>
      </Head>

      <MovieList title="Discover Movies" movies={moviesList} />

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
      movies: res,
    },
  };
};
