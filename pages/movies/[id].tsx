import { GetServerSideProps } from "next";
import { getMovieDetail } from "../../helper/getMovies";

// Components
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { Button } from "antd";

// Types
import { MovieDetailTypes, Genre } from "../../types/MovieTypes";

interface MovieDetailPropsTypes {
  movieDetail: MovieDetailTypes;
}

export default function MovieDetail({ movieDetail }: MovieDetailPropsTypes) {
  return (
    <>
      <Head>
        <title>Moviz | {movieDetail.title}</title>
      </Head>

      {/* Back Button */}
      <div className="w-fit">
        <Link href="/">
          <a>
            <Button className="w-fit h-fit px-[2vw] py-2 flex items-center gap-[1vw] font-bold text-h3 text-floralWhite rounded-xl focus:text-prussianBlue hover:text-prussianBlue d-sm:text-body ph:px-[4vw]">
              <p>Back</p>
            </Button>
          </a>
        </Link>
      </div>

      {/* Movie Detail Section */}
      <section
        className="relative my-[4vh] w-full px-[4vw] py-[4vh] bg-cover bg-no-repeat isolate rounded-xl overflow-hidden tb:p-0"
        style={{
          background: `url('https://image.tmdb.org/t/p/w1280${movieDetail.backdrop_path}')`,
        }}
      >
        <div className="z-10 flex gap-[4vw] tb:flex-col tb:items-start tb:gap-0">
          <div className="relative w-[24vw] h-fit aspect-[2/3] tb:w-full tb:h-[40vh] tb:aspect-auto">
            <Image
              layout="fill"
              src={`https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`}
              alt={movieDetail.title}
              className=" rounded-xl tb:rounded-none"
              objectFit="cover"
            />
          </div>

          <div className="pt-[2vh] max-w-[55vw] flex flex-col d-md:pt-[0] tb:px-[4vw] tb:py-[4vh] tb:bg-prussianBlue tb:w-full tb:max-w-[100%]">
            <div className="mt-[4vh] flex gap-8 items-center">
              <h2 className="mb-[1vh] max-w-[35vw] font-bold text-floralWhite text-h1 whitespace-nowrap text-ellipsis overflow-hidden d-sm:text-h2 tb:max-w-[52.5vw]">
                {movieDetail.title}
              </h2>
              <p className="text-body opacity-75">{movieDetail.runtime}m</p>
              {!movieDetail.adult ? (
                <div className="relative w-12 aspect-square">
                  <Image
                    layout="fill"
                    src="/assets/adult.png"
                    alt={movieDetail.title}
                    className="cursor-pointer"
                  />
                </div>
              ) : null}
            </div>

            <p className="mb-[2vh] max-h-[200px] text-h3 overflow-hidden leading-[50px] d-sm:text-body d-sm:max-h-[90px] d-sm:leading-[30px] d-sm:mb-[1vh] tb:text-h3">
              {movieDetail.overview}
            </p>

            <div className="mb-[4vh] flex flex-col d-sm:mb-[2vh]">
              <h3 className="mb-[1vh] font-bold text-h3 text-floralWhite">
                Genres
              </h3>
              <div className="flex flex-wrap gap-[1vw] tb:gap-[4vw]">
                {(movieDetail.genres ?? []).map((genre: Genre) => {
                  return (
                    <p
                      className="w-fit px-4 py-2 font-bold text-body rounded-xl transition-all ease-in-out duration-300 bg-floralWhite text-prussianBlue border-2 border-floralWhite cursor-pointer hover:bg-prussianBlue hover:border-prussianBlue hover:text-floralWhite hover:scale-110 d-sm:text-secondary"
                      key={genre.id}
                    >
                      {genre.name}
                    </p>
                  );
                })}
              </div>
            </div>

            <a
              className="w-fit px-[2vw] py-[1vh] font-bold text-floralWhite text-body bg-red rounded-xl cursor-pointer transition-all ease-in-out duration-300 hover:bg-floralWhite hover:text-red hover:scale-105 ph:mt-[2vh]"
              href={movieDetail.homepage}
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
  const movieDetail = await getMovieDetail(context?.params?.id);

  return {
    props: {
      movieDetail,
    },
  };
};
