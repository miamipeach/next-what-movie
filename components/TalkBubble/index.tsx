'use client';
import styles from '@/app/talk/talk.module.scss';
import { TalkType } from '@/type/Talk';
import React, { useEffect, useMemo, useRef } from 'react';
import { motion, useAnimate } from 'framer-motion';
import { ScrollDownPhoneBox } from '@/utils/common';

interface IProps {
  talkInfo: TalkType;
  children?: React.ReactNode;
  index: number;
  delay?: number;
}

export default function TalkBubble({ talkInfo, children, index, delay }: IProps) {
  const headerAnimationTime = useMemo(() => delay || 0, []);

  const [scope, animate] = useAnimate<HTMLDivElement>();

  useEffect(() => {
    if (!scope || !scope.current) return;
    const height = scope.current.getBoundingClientRect().top;

    void animate(
      scope.current,
      { opacity: 1 },
      {
        delay: index * 0.5 + headerAnimationTime,
      }
    ).then(() => {
      ScrollDownPhoneBox(height);
    });
  }, []);

  // const container = {
  //   hidden: { opacity: 0, x: talkInfo.direction === 'left' ? -100 : 100 },
  //   show: { opacity: 1, x: 0 },
  // };

  return (
    <div
      className={`${talkInfo.direction === 'left' ? styles.talkBoxLeft : styles.talkBoxRight} ${
        styles.talkBubbleBox
      }`}
      ref={scope}
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
