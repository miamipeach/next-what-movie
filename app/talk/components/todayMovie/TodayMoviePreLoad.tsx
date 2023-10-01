import getQueryClient from '@/utils/getQueryClient';
import { getTodayMovieList } from '@/app/today/getMovieList';
import { dehydrate, Hydrate } from '@tanstack/react-query';
import React from 'react';
import TalkBox from '@components/TalkBox';
import TodayMovieSelect from '@/app/talk/components/todayMovie/TodayMovieSelect';

export default async function TodayMoviePreLoad() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['get-today-movie'],
    queryFn: getTodayMovieList,
    cacheTime: 43200000,
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <TalkBox sceneNumber={1} />
      <TodayMovieSelect />
    </Hydrate>
  );
}
