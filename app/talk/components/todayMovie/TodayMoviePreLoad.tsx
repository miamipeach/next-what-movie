import getQueryClient from '@/utils/getQueryClient';
import { getTodayMovieList } from '@/app/api/getMovieList';
import { dehydrate, Hydrate, useQuery } from '@tanstack/react-query';
import React from 'react';
import TodayMovieSelect from '@/app/talk/components/todayMovie/TodayMovieSelect';
import { Button } from '@/type/Button';
import { Movie } from '@/type/Movie';

export default async function TodayMoviePreLoad() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['get-today-movie'],
    queryFn: getTodayMovieList,
    cacheTime: 43200000,
    retry: 3,
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <TodayMovieSelect />
    </Hydrate>
  );
}

export function useTodayMovieList() {
  const { data, isLoading } = useQuery(['get-today-movie'], getTodayMovieList);

  const list: Button[] = data?.map((d: Movie) => ({ value: d.movieCd, label: d.movieNm })) || [];

  return { list, isLoading };
}
