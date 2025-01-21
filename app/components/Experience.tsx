// /components/Experience.tsx
import styles from './Experience.module.css';

const Experience = () => {
  return (
    <section className={styles.experience}>
      <h2>Professional Experience</h2>

      <div className={styles.job}>
        <h3>Data Analyst</h3>
        <p>FairCode Associates LLC</p>
        <img src="/images/faircode.png" alt="FairCode Logo" className={styles.logo} />
        <p>Apr 2024 – Present</p>
        <ul>
          <li>Develop and maintain internal and client-facing dashboards using Power BI.</li>
          <li>Analyze large datasets to identify trends and deliver actionable insights to stakeholders.</li>
          <li>Collaborate with operations and technology teams to streamline analytics projects and automate processes.</li>
          <li>Automate help desk functions using AI to improve response times and support ticket management.</li>
          <li>Conduct data access audits and security reviews to ensure compliance with SOC2, HIPAA, and other standards.</li>
          <li>Optimize workflows to boost operational efficiency and client satisfaction.</li>
        </ul>
      </div>

      <div className={styles.job}>
        <h3>Freelance Web Developer</h3>
        <p>Self-employed</p>
        <p>Feb 2023 – Dec 2024</p>
        <ul>
          <li>Developed and maintained websites using JavaScript, ReactJS, NodeJS, and MongoDB.</li>
          <li>Integrated third-party APIs for real-time updates and enhanced web functionality.</li>
          <li>Worked with clients to gather requirements, provide technical expertise, and deliver high-quality solutions.</li>
          <li>Conducted quality assurance testing to ensure websites met design and functional requirements.</li>
          <li>Stayed updated on industry trends and advancements in web technologies.</li>
        </ul>
      </div>

      <div className={styles.job}>
        <h3>Outreach and Engagement</h3>
        <p>JELF (Jewish Educational Loan Fund)</p>
        <p>Sep 2023 – Present</p>
        <ul>
          <li>Engage with potential and existing donors to promote JELF&apos;s mission and initiatives.</li>
          <li>Deliver speeches at notable events to cultivate a culture of giving and empower the Jewish community.</li>
          <li>Foster relationships to increase donations and support for educational programs.</li>
        </ul>
      </div>

      <div className={styles.job}>
        <h3>Board Member</h3>
        <p>HillelUGA</p>
        <p>Aug 2022 – Oct 2023</p>
        <ul>
          <li>Provided strategic direction and support for Hillel&apos;s programs and initiatives.</li>
          <li>Collaborated with fellow board members to enhance student engagement and cultural programming.</li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
