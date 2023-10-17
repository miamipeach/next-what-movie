'use client';
import SelectBox from '@components/SelectBox';
import { TalkUtil } from '@/utils/talkUtil';
import TalkBubble from '@components/TalkBubble';
import { getMovieDetail } from '@/app/api/getMovieDetail';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useTodayMovieList } from '@/app/api/getMovieList';
import { TalkType } from '@/type/Talk';
import TalkBox from '@components/TalkBox';
import { useSelectMovie } from '@/app/recoil/selectMovie/useSelectMovie';

interface ITodayMovieSelect {
  delay: number;
}

export default function TodayMovieSelect({ delay }: ITodayMovieSelect) {
  const { list: movieList, isLoading } = useTodayMovieList();
  const talkUtil = new TalkUtil();
  const sceneNumber = 0;

  const prevTalkBoxCount: number = talkUtil.getSceneMsgCount(sceneNumber);
  const talkInfo = { direction: talkUtil.getSceneMsgDirection(sceneNumber) };

  const [movieCd, setMovieCd] = useState<string>('');
  const [nextMsg, setNextMsg] = useState<TalkType[]>([]);
  const { changeSelectMovie, getSelectMovieMsg } = useSelectMovie();

  const handleSelectMovie = (value: string) => {
    setMovieCd(value);
  };

  useQuery(['get-movie-detail', movieCd], () => getMovieDetail(movieCd), {
    onSuccess: (data) => {
      changeSelectMovie(data);
      setNextMsg(getSelectMovieMsg());
    },
  });

  if (!movieList) return null;

  return (
    <>
      {isLoading ? (
        <TalkBubble talkInfo={talkInfo} index={prevTalkBoxCount} delay={delay}>
          로딩중
        </TalkBubble>
      ) : (
        <SelectBox
          talkInfo={talkInfo}
          selectInfo={movieList}
          index={prevTalkBoxCount}
          onClickEvent={handleSelectMovie}
          delay={delay}
          disabled={movieCd !== ''}
        />
      )}
      {nextMsg.length > 0 && <TalkBox talkList={nextMsg} />}
      {nextMsg.length > 0 && (
        <SelectBox
          talkInfo={talkInfo}
          selectInfo={movieList.filter((m) => m.value !== movieCd)}
          index={nextMsg.length}
          onClickEvent={handleSelectMovie}
        />
      )}
    </>
  );
}
