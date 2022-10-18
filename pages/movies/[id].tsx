import { GetServerSideProps } from "next";
import { getMovieDetail } from "../../helper/getMovies";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

export default function MovieDetail(movieDetail: any) {
  return (
    <>
      <Head>
        <title>Moviz | {movieDetail.movieDetail.title}</title>
      </Head>

      <Link href="/">
        <a className="pl-[1vw] flex items-center gap-[1vw] font-bold text-h3 hover:text-shadowBlue">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 17L13 12L18 7M11 17L6 12L11 7"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Back
        </a>
      </Link>

      <section
        className="relative mt-[2vh] w-full px-[4vw] py-[4vh] bg-cover bg-no-repeat isolate rounded-xl"
        style={{
          background: `url('https://image.tmdb.org/t/p/w1280${movieDetail.movieDetail.backdrop_path}')`,
        }}
      >
        <div className="z-10 flex gap-[4vw]">
          <div className="relative w-[24vw] aspect-[2/3]">
            <Image
              layout="fill"
              src={`https://image.tmdb.org/t/p/w500${movieDetail.movieDetail.poster_path}`}
              alt={movieDetail.movieDetail.title}
              className=" rounded-xl"
            />
          </div>
          <div className="pt-[2vh] max-w-[55vw] flex flex-col">
            <h2 className="mb-[2vh] font-bold text-floralWhite text-h1">
              {movieDetail.movieDetail.title}
            </h2>
            <p className="text-h3">{movieDetail.movieDetail.overview}</p>
          </div>
        </div>

        <div className="absolute top-0 left-0 w-full h-full bg-richBlack opacity-[35%] z-[-1]"></div>
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
