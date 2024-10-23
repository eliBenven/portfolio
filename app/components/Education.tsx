// /components/Education.tsx
import styles from './Education.module.css';

const Education = () => {
  return (
    <section className={styles.education}>
      <h2 className={styles.title}>Education</h2>

      <div className={styles.educationWrapper}>
        {/* University Education */}
        <div className={styles.educationItem}>
          <div className={styles.logoContainer}>
            <img src="/images/uga.png" alt="UGA Logo" className={styles.logo} />
          </div>
          <div className={styles.educationText}>
            <h3>B.S. Computer Science</h3>
            <p>University of Georgia, Athens, GA</p>
            <p>Aug 2021 – Dec 2024</p>
            <p className={styles.honor}>Spring 2024 Presidential Scholar (4.0)</p>
          </div>
        </div>

        {/* DataCamp Certification */}
        <div className={styles.certificationItem}>
          <div className={styles.logoContainer}>
            <img src="/images/datacamp.webp" alt="DataCamp Logo" className={styles.logo} />
          </div>
          <div className={styles.certificationText}>
            <h3>Data Science Career Track</h3>
            <p><strong>DataCamp</strong> Certification, 2022</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
