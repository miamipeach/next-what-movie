'use client';
import styles from '@/app/talk/talk.module.scss';
import { TalkType } from '@/type/Talk';
import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

interface IProps {
  talkInfo: TalkType;
  children?: React.ReactNode;
  index: number;
}

export default function TalkBubble({ talkInfo, children, index }: IProps) {
  const headerAnimationTime = useMemo(() => parseInt(styles.introAnimationDelayTime, 10), []);

  const container = {
    hidden: { opacity: 0, x: talkInfo.direction === 'left' ? -100 : 100 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      className={`${talkInfo.direction === 'left' ? styles.talkBoxLeft : styles.talkBoxRight} ${
        styles.talkBubbleBox
      }`}
      variants={container}
      initial={`hidden`}
      animate={`show`}
      transition={{ delay: index * 0.5 + headerAnimationTime }}
    >
      <div className={styles.talker}>{talkInfo.direction === 'left' ? <>👦🏻</> : <>👩🏻</>} </div>
      <div
        className={`${
          talkInfo.direction === 'left' ? styles.talkBubbleLeft : styles.talkBubbleRight
        }`}
      >
        {!!talkInfo.msg && typeof talkInfo.msg === 'string' ? talkInfo.msg : children}
      </div>
    </motion.div>
  );
}
