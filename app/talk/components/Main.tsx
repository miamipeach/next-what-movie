import styles from '@/app/talk/talk.module.scss';
import TalkBox from '@/components/TalkBox';
import { TalkUtil } from '@/utils/talkUtil';
import TodayMoviePreLoad from '@/app/talk/components/todayMovie/TodayMoviePreLoad';

export default function Main() {
  const talkUtil = new TalkUtil();
  const delayAniTime = parseInt(styles.introAnimationDelayTime, 10);

  return (
    <main className={styles.talkLayout}>
      <section className={`${styles.phoneBox}`} id={`phoneBox`}>
        <TalkBox talkList={talkUtil.getSceneMsg(0)} delay={delayAniTime} />
        <TodayMoviePreLoad delay={delayAniTime} />
      </section>
    </main>
  );
}
