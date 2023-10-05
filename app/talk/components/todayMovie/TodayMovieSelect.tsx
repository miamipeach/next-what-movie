'use client';
import { useQuery } from '@tanstack/react-query';
import { getTodayMovieList } from '@/app/today/getMovieList';
import SelectBox from '@components/SelectBox';
import { TalkAnimation } from '@/utils/talkAnimation';
import TalkBubble from '@components/TalkBubble';

export default function TodayMovieSelect() {
  const { data: movieList, isLoading } = useQuery({
    queryKey: ['get-today-movie'],
    queryFn: getTodayMovieList,
  });

  const talkAni = new TalkAnimation();

  const prevTalkBoxCount: number = talkAni.getSceneMsgCount(1);
  const preTalkDirection: string = talkAni.getSceneMsgDirection(1);

  const todayTalkInfo = { boxId: prevTalkBoxCount, direction: preTalkDirection };

  if (isLoading) {
    return (
      <TalkBubble talkInfo={todayTalkInfo} index={prevTalkBoxCount}>
        로딩중
      </TalkBubble>
    );
  }

  if (!movieList) return null;

  return <SelectBox talkInfo={todayTalkInfo} selectInfo={movieList} index={prevTalkBoxCount} />;
}
