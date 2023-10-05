import styles from '@/app/talk/talk.module.scss';
import TalkBox from '@/components/TalkBox';
import { Suspense } from 'react';
import TodayMoviePreLoad from '@/app/talk/components/todayMovie/TodayMoviePreLoad';

export default function Main() {
  return (
    <main className={styles.talkLayout}>
      <section className={`${styles.phoneBox} ${styles.firstScene}`}>
        <TalkBox sceneNumber={0} />
        <Suspense fallback={<>loading</>}>
          <TodayMoviePreLoad />
        </Suspense>
      </section>
    </main>
  );
}
