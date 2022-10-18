import { Row, Col } from "antd";

interface MovieCarouselProps {
  title: string;
  movies: any;
}

export default function MovieCarousel({ title, movies }: MovieCarouselProps) {
  return (
    <>
      <section className={`section--${title}`}>
        <h2 className="text-h2 text-floralWhite">{title}</h2>

        {/* {JSON.stringify(movies)} */}
        <div className="flex gap-5  ">
          <Row>
            {movies.results.map((movie: any) => {
              return (
                <Col span={6} key={movie.id}>
                  <h3 className="text-floralWhite">{movie.title}</h3>
                </Col>
              );
            })}
          </Row>
        </div>
      </section>
    </>
  );
}
