'use client';
import SelectBox from '@components/SelectBox';
import { TalkAnimation } from '@/utils/talkAnimation';
import TalkBubble from '@components/TalkBubble';
import { useTodayMovieList } from '@/app/talk/components/todayMovie/TodayMoviePreLoad';
import { getMovieDetail, useGetMovieDetail } from '@/app/api/getMovieDetail';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

export default function TodayMovieSelect() {
  const { list: movieList, isLoading } = useTodayMovieList();

  const talkAni = new TalkAnimation();
  const prevTalkBoxCount: number = talkAni.getSceneMsgCount(0);
  const preTalkDirection: string = talkAni.getSceneMsgDirection(0);

  const todayTalkInfo = { direction: preTalkDirection };
  const [movieCd, setMovieCd] = useState('');

  const handleSelectMovie = (value: string) => {
    setMovieCd(value);
  };

  const { data } = useQuery(['get-movie-detail', movieCd], () => getMovieDetail(movieCd));

  if (isLoading) {
    return (
      <TalkBubble talkInfo={todayTalkInfo} index={prevTalkBoxCount}>
        로딩중
      </TalkBubble>
    );
  }

  if (!movieList) return null;

  return (
    <>
      <SelectBox
        talkInfo={todayTalkInfo}
        selectInfo={movieList}
        index={prevTalkBoxCount}
        onClickEvent={handleSelectMovie}
      />
    </>
  );
}
