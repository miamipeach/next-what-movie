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
  delay?: number;
  disabled?: boolean;
}

export default function SelectBox({
  talkInfo,
  selectInfo,
  index,
  onClickEvent,
  delay = 0,
  disabled = false,
}: IProps) {
  return (
    <TalkBubble talkInfo={talkInfo} index={index} delay={delay}>
      {selectInfo.map((s) => (
        <button
          value={`${s.value}`}
          className={styles.selectButton}
          onClick={() => onClickEvent(s.value)}
          key={`select_box_${s.value}`}
          disabled={disabled}
        >
          {s.label}
        </button>
      ))}
    </TalkBubble>
  );
}
