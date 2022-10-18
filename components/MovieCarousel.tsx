interface MovieCarouselProps {
  title: string;
  movies: any;
}

export default function MovieCarousel({ title, movies }: MovieCarouselProps) {
  return <h2>{title}</h2>;
}
