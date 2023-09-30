import styles from '@/app/talk/talk.module.scss';
import SceneBox from '@/components/SceneBox';

export default function TalkMain() {
  return (
    <main className={styles.talkLayout}>
      <section className={`${styles.phoneBox} ${styles.firstScene}`}>
        <SceneBox sceneNumber={0} />
      </section>
    </main>
  );
}
