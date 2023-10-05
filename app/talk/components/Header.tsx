import styles from '@/app/talk/talk.module.scss';

export default function Header() {
  return (
    <header className={`${styles.talkTitle}`}>
      <h1>WHAT&apos;S THE NEXT MOVIE?</h1>
    </header>
  );
}
