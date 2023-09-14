import styles from '@/app/talk/talk.module.scss';

interface IProps {
  talkInfo: {
    direction: string;
    msg: string;
  };
}

export default function TalkBubble({ talkInfo }: IProps) {
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
        {talkInfo.msg}
      </div>
    </div>
  );
}
