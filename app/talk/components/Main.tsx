import styles from '@/app/talk/talk.module.scss';
import TalkBox from '@/components/TalkBox';
import TodayMovieSelect from '@/app/talk/components/todayMovie/TodayMovieSelect';

export default function Main() {
  return (
    <main className={styles.talkLayout}>
      <section className={`${styles.phoneBox} ${styles.firstScene}`}>
        <TalkBox sceneNumber={0} />
        <TodayMovieSelect />
      </section>
    </main>
  );
}
