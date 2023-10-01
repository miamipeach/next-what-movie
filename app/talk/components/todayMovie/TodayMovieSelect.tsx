'use client';

import { useQuery } from '@tanstack/react-query';
import { getTodayMovieList } from '@/app/today/getMovieList';
import SelectBox from '@components/SelectBox';
import { TalkType } from '@/type/Talk';
import { TalkAnimation } from '@/utils/talkAnimation';
import TalkBubble from '@components/TalkBubble';

export default function TodayMovieSelect() {
  const { data: movieList, isLoading } = useQuery({
    queryKey: ['get-today-movie'],
    queryFn: getTodayMovieList,
  });

  const talkBoxListInfo: TalkType = new TalkAnimation().getSceneListMsg(1);

  const todayTalkInfo = { boxId: talkBoxListInfo.boxId + 1, direction: talkBoxListInfo.direction };

  if (isLoading) {
    return <TalkBubble talkInfo={todayTalkInfo}>로딩중</TalkBubble>;
  }

  if (!movieList) return null;

  return <SelectBox talkInfo={todayTalkInfo} selectInfo={movieList} />;
}
