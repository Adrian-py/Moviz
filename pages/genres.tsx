import { GetServerSideProps } from "next";
import React from "react";

export default function genres(genre: any) {
  return (
    <>
      <h2 className="font-bold text-h2">Genres</h2>
      {genre.genre.genres.map((genre: any) => {
        return <h3 key={genre.id}>{genre.name}</h3>;
      })}
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=f93991664483bce387a4f9f9b8cb19cb&language=en-US"
  );

  const genre: any = await res.json();

  return {
    props: {
      genre,
    },
  };
};
