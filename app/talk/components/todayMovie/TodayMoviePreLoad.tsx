import getQueryClient from '@/utils/getQueryClient';
import { getTodayMovieList } from '@/app/api/getMovieList';
import { dehydrate, Hydrate } from '@tanstack/react-query';
import React from 'react';
import TodayMovieSelect from '@/app/talk/components/todayMovie/TodayMovieSelect';

interface ITodayMoviePreLoad {
  delay: number;
}

export default async function TodayMoviePreLoad({ delay }: ITodayMoviePreLoad) {
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
      <TodayMovieSelect delay={delay} />
    </Hydrate>
  );
}
