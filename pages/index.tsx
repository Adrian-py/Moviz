import Head from "next/head";

import type { GetServerSideProps, NextPage } from "next";

const Home: NextPage = (movies: any) => {
  return (
    <>
      <Head>
        <title>Moviz | Home</title>
      </Head>
      <>
        {movies.movies.results.map((movie: any) => {
          return <h2 key={movie.id}>{movie.title}</h2>;
        })}
      </>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/now_playing?api_key=f93991664483bce387a4f9f9b8cb19cb&language=en-US&page=1"
  );

  const movies: any = await res.json();

  return {
    props: {
      movies,
    },
  };
};

export default Home;
