import { Movie } from '@/type/Movie';

interface IProps {
  movie: Movie;
}
export default function Post({ movie }: IProps) {
  const { rank, movieNm } = movie;
  return (
    <article>
      <div>
        <em>{rank}</em>
        <strong>{movieNm}</strong>
      </div>
    </article>
  );
}
