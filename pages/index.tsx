import type { GetServerSideProps } from "next";
import { useEffect, useState } from "react";

// Components
import Head from "next/head";
import MovieList from "../components/MovieList";

// Helpers
import { getMovies } from "../helper/getMovies";
import {
  handleGetFromLocalStorage,
  handlePushingToLocalStorage,
} from "../helper/handlePushToLocalStorage";

// Types
import type { MovieListTypes } from "../types/MovieTypes";

interface HomepagePropsTypes {
  nowPlayingMovies: MovieListTypes;
  upcomingMovies: MovieListTypes;
}

// Custom Hook for Homepage
const useHomepage = (
  nowPlayingMovies: MovieListTypes,
  upcomingMovies: MovieListTypes
) => {
  const [nowPlayingList, setNowPlayingList] = useState(
    nowPlayingMovies.results ?? []
  );
  const [upcomingList, setUpcomingList] = useState(
    upcomingMovies.results ?? []
  );

  // To check if there is previously generated list to use, if API calls fail
  useEffect(() => {
    if (nowPlayingList !== undefined) {
      handlePushingToLocalStorage("nowPlayingMoviesList", nowPlayingList);
      handlePushingToLocalStorage("upcomingMoviesList", upcomingList);
      return;
    }

    if (handleGetFromLocalStorage("nowPlayingMoviesList")) {
      setNowPlayingList(handleGetFromLocalStorage("nowPlayingMoviesList"));
      setUpcomingList(handleGetFromLocalStorage("upcomingMoviesList"));
    }
  }, [nowPlayingList, upcomingList]);

  return { nowPlayingList, upcomingList };
};

const Home = ({ nowPlayingMovies, upcomingMovies }: HomepagePropsTypes) => {
  const { nowPlayingList, upcomingList } = useHomepage(
    nowPlayingMovies,
    upcomingMovies
  );

  return (
    <>
      <Head>
        <title>Moviz | Home</title>
      </Head>
      <>
        <MovieList title="Now Playing" movies={nowPlayingList ?? []} />
        <MovieList title="Upcoming" movies={upcomingList ?? []} />
      </>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const nowPlayingMovies = await getMovies("now_playing");
  const upcomingMovies = await getMovies("upcoming");

  return {
    props: {
      nowPlayingMovies,
      upcomingMovies,
    },
  };
};

export default Home;
