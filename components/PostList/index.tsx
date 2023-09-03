import Post from '@/components/Post';
import { Movie } from '@/type/Movie';

interface IProps {
  movieList: Movie[];
}

export default function PostList({ movieList }: IProps) {
  return (
    <section>
      <ol>
        <li>
          {movieList?.map((m, index) => (
            <Post movie={m} key={`today_movie_order_${index}`} />
          ))}
        </li>
      </ol>
    </section>
  );
}
