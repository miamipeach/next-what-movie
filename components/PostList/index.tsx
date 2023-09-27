'use client';

import Post from '@/components/Post';
import { useQuery } from '@tanstack/react-query';
import { getTodayMovieList } from '@/app/today/getMovieList';

export default function PostList() {
  const { data: movieList } = useQuery({
    queryKey: ['get-today-movie'],
    queryFn: getTodayMovieList,
  });

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
