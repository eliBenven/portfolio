import Education from './Education';
import Experience from './Experience';
import Projects from './Projects';
import Skills from './Skills';
import Honors from './Honors';
import styles from './Splash.module.css';

const Person = {
  first: "Eli",
  last: "Benveniste",
  title: "Data Analyst & Developer",
}

const Splash = () => {
  return (
    <>
      <section className={styles.splash}>
        <div className={styles.imageWrapper}>
          <img src="/images/Headshot.png" alt="Eli Benveniste headshot" className={styles.image} />
        </div>
        <div className={styles.content}>
          <h1>{Person.first} {Person.last}</h1>
          <p>{Person.title}</p>
        </div>
        <div className={styles.line}></div> {/* White line below content */}
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
