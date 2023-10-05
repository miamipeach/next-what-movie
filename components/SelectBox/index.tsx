import TalkBubble from '@components/TalkBubble';
import { TalkType } from '@/type/Talk';
import React from 'react';
import { Movie } from '@/type/Movie';
import styles from './select.module.scss';

interface IProps {
  talkInfo: TalkType;
  selectInfo: Movie[];
  index: number;
}

export default function SelectBox({ talkInfo, selectInfo, index }: IProps) {
  return (
    <TalkBubble talkInfo={talkInfo} index={index}>
      {selectInfo
        .sort((s1, s2) => {
          return parseInt(s1.rank) - parseInt(s2.rank);
        })
        .map((s) => (
          <button key={`${s.movieCd}`} className={styles.selectButton}>
            {s.movieNm}
          </button>
        ))}
    </TalkBubble>
  );
}
