import Head from "next/head";
import MovieList from "../components/MovieList";

import type { GetServerSideProps, NextPage } from "next";
import { getMovies } from "../helper/getMovies";

const Home: NextPage = ({ nowPlayingMovies, upcomingMovies }: any) => {
  return (
    <>
      <Head>
        <title>Moviz | Home</title>
      </Head>
      <>
        <MovieList title="Now Playing" movies={nowPlayingMovies.results} />
        <MovieList title="Upcoming" movies={upcomingMovies.results} />
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
