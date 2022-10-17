import type { GetServerSideProps, NextPage } from "next";
import styles from "../styles/Home.module.css";

const Home: NextPage = (movies: any) => {
  return (
    <div className={styles.container}>
      {movies.movies.results.map((movie: any) => {
        return <h2 key={movie.id}>{movie.title}</h2>;
      })}
    </div>
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
