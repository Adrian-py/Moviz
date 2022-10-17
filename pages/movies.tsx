import { GetServerSideProps } from "next";

export default function movies({ movies }: { movies: any }) {
  return (
    <>
      <h2 className="font-bold text-h2">All Movies</h2>
      {/* {JSON.stringify(movies.results)} */}
      {movies.results.map((movie: any) => {
        return <h3 key={movie.id}>{movie.title}</h3>;
      })}
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(
    "https://api.themoviedb.org/3/discover/movie?api_key=f93991664483bce387a4f9f9b8cb19cb&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate"
  );

  const movies: any = await res.json();

  return {
    props: {
      movies,
    },
  };
};
