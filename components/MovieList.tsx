import { Row, Col } from "antd";
import Image from "next/image";
import Link from "next/link";

// Types
import { MovieListResult } from "../types/MovieTypes";

interface MovieCarouselProps {
  title: string;
  movies: MovieListResult[];
}

export default function MovieList({ title, movies }: MovieCarouselProps) {
  return (
    <>
      <section className="mb-[8vh]">
        <h2 className="mb-[4vh] font-bold text-h2 text-floralWhite ph:text-h3">
          {title}
        </h2>

        <div className="flex gap-5">
          <Row gutter={[32, { xs: 32, sm: 16, md: 24, lg: 48 }]}>
            {(movies ?? []).map((movie: MovieListResult) => {
              return (
                <Col
                  xl={6}
                  lg={12}
                  md={12}
                  xs={24}
                  key={movie.id}
                  className="flex flex-col items-center gap-2"
                >
                  <Link href={`/movies/${movie.id}`}>
                    <a className="w-full">
                      <div className="relative w-full block aspect-[2/3] ease-in-out duration-500 hover:brightness-50">
                        <Image
                          layout="fill"
                          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                          alt={movie.title}
                          className="rounded-2xl"
                        />
                      </div>
                      <h3 className="font-bold text-h3 text-center text-floralWhite ph:mt-[4px]">
                        {movie.title}
                      </h3>
                    </a>
                  </Link>
                </Col>
              );
            })}
          </Row>
        </div>
      </section>
    </>
  );
}
