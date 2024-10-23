// /components/Footer.tsx
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>© 2024 Eli Benveniste. All Rights Reserved.</p>
      <div className={styles.links}>
        <a href="https://www.linkedin.com/in/eli-benveniste/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="mailto:eli@benven.org">Email</a>
      </div>
    </footer>
  );
};

export default Footer;
