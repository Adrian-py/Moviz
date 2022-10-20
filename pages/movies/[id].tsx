import { GetServerSideProps } from "next";
import { getMovieDetail } from "../../helper/getMovies";

import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

import { Button } from "antd";

export default function MovieDetail(movieDetail: any) {
  console.log(movieDetail.movieDetail);
  return (
    <>
      <Head>
        <title>Moviz | {movieDetail.movieDetail.title}</title>
      </Head>

      <Link href="/">
        <a>
          <Button className="h-fit px-[2vw] py-2 flex items-center gap-[1vw] font-bold text-h3 text-floralWhite rounded-xl focus:text-prussianBlue hover:text-prussianBlue">
            <p>Back</p>
          </Button>
        </a>
      </Link>

      <section
        className="relative mt-[2vh] w-full px-[4vw] py-[4vh] bg-cover bg-no-repeat isolate rounded-xl"
        style={{
          background: `url('https://image.tmdb.org/t/p/w1280${movieDetail.movieDetail.backdrop_path}')`,
        }}
      >
        <div className="z-10 flex gap-[4vw]">
          <div className="relative w-[24vw] h-fit aspect-[2/3]">
            <Image
              layout="fill"
              src={`https://image.tmdb.org/t/p/w500${movieDetail.movieDetail.poster_path}`}
              alt={movieDetail.movieDetail.title}
              className=" rounded-xl"
            />
          </div>

          <div className="pt-[2vh] max-w-[55vw] flex flex-col">
            <div className="flex gap-12 items-center">
              <h2 className="mb-[2vh] max-w-[35vw] font-bold text-floralWhite text-h1 whitespace-nowrap text-ellipsis overflow-hidden">
                {movieDetail.movieDetail.title}
              </h2>
              <p className="text-h3 opacity-75">
                {movieDetail.movieDetail.runtime}m
              </p>
              {movieDetail.movieDetail.adult ? (
                <Image
                  layout="fixed"
                  width="64"
                  height="64"
                  src="/assets/adult.png"
                  alt={movieDetail.movieDetail.title}
                  className="cursor-pointer"
                />
              ) : null}
            </div>

            <p className="mb-[4vh] text-h3">
              {movieDetail.movieDetail.overview}
            </p>

            <div className="mb-[4vh] flex flex-col">
              <h3 className="mb-[1vh] font-bold text-h3 text-floralWhite">
                Genres
              </h3>
              <div className="flex flex-wrap gap-[1vw]">
                {movieDetail.movieDetail.genres.map((genre: any) => {
                  return (
                    <p
                      className="w-fit px-4 py-2 font-bold text-body rounded-xl transition-all ease-in-out duration-300 bg-floralWhite text-prussianBlue border-2 border-floralWhite cursor-pointer hover:bg-prussianBlue hover:border-prussianBlue hover:text-floralWhite hover:scale-110"
                      key={genre.id}
                    >
                      {genre.name}
                    </p>
                  );
                })}
              </div>
            </div>

            <a
              className="w-fit px-[2vw] py-[1vh] font-bold text-floralWhite text-body bg-red rounded-xl cursor-pointer transition-all ease-in-out duration-300 hover:bg-floralWhite hover:text-red hover:scale-105"
              href={movieDetail.movieDetail.homepage}
            >
              Movie Homepage
            </a>
          </div>
        </div>

        <div className="absolute top-0 left-0 w-full h-full bg-richBlack opacity-[60%] z-[-1]"></div>
      </section>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await getMovieDetail(context?.params?.id);

  return {
    props: {
      movieDetail: res,
    },
  };
};
