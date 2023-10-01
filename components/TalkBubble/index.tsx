import styles from '@/app/talk/talk.module.scss';
import { TalkType } from '@/type/Talk';
import React from 'react';

interface IProps {
  talkInfo: TalkType;
  children?: React.ReactNode;
}

export default function TalkBubble({ talkInfo, children }: IProps) {
  return (
    <div
      className={`${
        talkInfo.direction === 'left' ? styles.talkBubbleBoxLeft : styles.talkBubbleBoxRight
      } ${styles.talkBubbleBox}`}
    >
      <div className={styles.talker}>{talkInfo.direction === 'left' ? <>👦🏻</> : <>👩🏻</>} </div>
      <div
        className={`${
          talkInfo.direction === 'left' ? styles.talkBubbleLeft : styles.talkBubbleRight
        }`}
      >
        {!!talkInfo.msg && typeof talkInfo.msg === 'string' ? talkInfo.msg : children}
      </div>
    </div>
  );
}
