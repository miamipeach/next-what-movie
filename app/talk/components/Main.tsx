import styles from '@/app/talk/talk.module.scss';
import TalkBox from '@/components/TalkBox';
import TodayMovieSelect from '@/app/talk/components/todayMovie/TodayMovieSelect';
import { Suspense } from 'react';

export default function Main() {
  return (
    <main className={styles.talkLayout}>
      <section className={`${styles.phoneBox} ${styles.firstScene}`}>
        <TalkBox sceneNumber={0} />
        <Suspense fallback={<>loading</>}>
          <TodayMovieSelect />
        </Suspense>
      </section>
    </main>
  );
}
