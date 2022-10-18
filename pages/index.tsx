import Head from "next/head";
import MovieCarousel from "../components/MovieCarousel";

import type { GetServerSideProps, NextPage } from "next";
import { getMovies } from "../helper/getMovies";

const Home: NextPage = ({ nowPlayingMovies, upcomingMovies }: any) => {
  return (
    <>
      <Head>
        <title>Moviz | Home</title>
      </Head>
      <>
        <MovieCarousel title="Now Playing" movies={nowPlayingMovies} />
        <MovieCarousel title="Upcoming" movies={upcomingMovies} />
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
