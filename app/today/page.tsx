import PostList from '@/components/PostList';
import { dehydrate, Hydrate } from '@tanstack/react-query';
import getQueryClient from '@/utils/getQueryClient';
import React from 'react';
import { getTodayMovieList } from '@/app/today/getMovieList';

export default async function Today() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['get-today-movie'],
    queryFn: getTodayMovieList,
    cacheTime: 43200000,
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <section>
        <PostList />
      </section>
    </Hydrate>
  );
}
