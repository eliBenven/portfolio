// /components/Nav.tsx
import Link from 'next/link';
import styles from './Nav.module.css';

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/education">Education</Link></li>
        <li><Link href="/experience">Experience</Link></li>
        <li><Link href="/skills">Skills</Link></li>
        <li><Link href="/projects">Projects</Link></li>
        <li><Link href="/honors">Honors</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;
