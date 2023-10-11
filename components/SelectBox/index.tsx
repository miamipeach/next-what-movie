import TalkBubble from '@components/TalkBubble';
import { TalkType } from '@/type/Talk';
import React from 'react';
import styles from './select.module.scss';
import { Button } from '@/type/Button';

interface IProps {
  talkInfo: TalkType;
  selectInfo: Button[];
  index: number;
  onClickEvent: (value: string) => void;
}

export default function SelectBox({ talkInfo, selectInfo, index, onClickEvent }: IProps) {
  return (
    <TalkBubble talkInfo={talkInfo} index={index}>
      {selectInfo.map((s) => (
        <button
          value={`${s.value}`}
          className={styles.selectButton}
          onClick={() => onClickEvent(s.value)}
          key={`select_box_${s.value}`}
        >
          {s.label}
        </button>
      ))}
    </TalkBubble>
  );
}
