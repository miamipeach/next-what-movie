import styles from '@/app/talk/talk.module.scss';
import SceneBox from '@/components/SceneBox';

interface IProps {}

export default function TalkMain({}: IProps) {
  return (
    <main className={styles.talkLayout}>
      <section className={styles.phoneBox}>
        <SceneBox sceneNumber={0} />
      </section>
    </main>
  );
}
