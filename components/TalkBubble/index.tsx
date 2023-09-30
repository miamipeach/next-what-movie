import styles from '@/app/talk/talk.module.scss';
import { TalkType } from '@/type/Talk';

interface IProps {
  talkInfo: TalkType;
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
