'use client';
import SelectBox from '@components/SelectBox';
import { TalkAnimation } from '@/utils/talkAnimation';
import TalkBubble from '@components/TalkBubble';
import { useTodayMovieList } from '@/app/talk/components/todayMovie/TodayMoviePreLoad';
import { useQuery } from '@tanstack/react-query';
import { getMovieDetail, useGetMovieDetail } from '@/app/api/getMovieDetail';
import { useEffect, useState } from 'react';

export default function TodayMovieSelect() {
  const { list: movieList, isLoading } = useTodayMovieList();

  const talkAni = new TalkAnimation();
  const prevTalkBoxCount: number = talkAni.getSceneMsgCount(0);
  const preTalkDirection: string = talkAni.getSceneMsgDirection(0);

  const todayTalkInfo = { direction: preTalkDirection };
  const [selectMovieCd, setSelectMovieCd] = useState('');

  const handleSelectMovie = async (value: string) => {
    console.log('skp value', value);
    setSelectMovieCd(value);
    await refetch();
  };

  const { status, data, error, isFetching, isPreviousData, refetch } = useGetMovieDetail({
    movieCd: selectMovieCd,
  });

  useEffect(() => {
    console.log('skp', { status, data, error, isFetching, isPreviousData });
  }, [status, data, error, isFetching, isPreviousData]);

  if (isLoading) {
    return (
      <TalkBubble talkInfo={todayTalkInfo} index={prevTalkBoxCount}>
        로딩중
      </TalkBubble>
    );
  }

  if (!movieList) return null;

  return (
    <SelectBox
      talkInfo={todayTalkInfo}
      selectInfo={movieList}
      index={prevTalkBoxCount}
      onClickEvent={handleSelectMovie}
    />
  );
}

export const useSelectMovie = (movieCd: string) => {
  return useQuery(['get-movie-detail'], () => getMovieDetail({ movieCd }), {
    refetchOnWindowFocus: false,
    enabled: false,
    onSuccess: () => {},
  });
};
