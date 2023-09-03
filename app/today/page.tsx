'use client';

import PostList from '@/components/PostList';
import { useQuery } from '@tanstack/react-query';
import { getTodayMovieEntity } from '@/type/data/getTodayMovieEntity';

async function getTodayMovie() {
  const url = `${
    process.env.NEXT_PUBLIC_API_BASE_URL as string
  }boxoffice/searchDailyBoxOfficeList.json?key=${
    process.env.NEXT_PUBLIC_API_KEY
  }&targetDt=20230902`;

  const res = await fetch(url);
  const movie = await res.json();

  return movie;
}

export default function Today() {
  const { data } = useQuery<getTodayMovieEntity>({
    queryKey: ['get-today-movie'],
    queryFn: () => getTodayMovie(),
  });

  return (
    <section>
      <PostList movieList={data?.boxOfficeResult.dailyBoxOfficeList || []} />
    </section>
  );
}
