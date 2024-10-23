// /components/Splash.tsx
import Education from './Education';
import Experience from './Experience';
import Projects from './Projects';
import Skills from './Skills';
import styles from './Splash.module.css';
import Honors from './Honors';
import Footer from './Footer';

const Splash = () => {
  return (
    <>
    <section className={styles.splash}>
      <div className={styles.content}>
        <h1>Eli Benveniste</h1>
        <p>Data Analyst & Developer</p>
      </div>
    </section>
    <Education />
    <Experience />
    <Projects />
    <Skills />
    <Honors />
    </>
  );
};

export default Splash;
