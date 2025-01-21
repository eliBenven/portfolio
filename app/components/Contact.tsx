"use client";

import styles from './Contact.module.css';

const Contact = () => {
  return (
  <>
    <section className={styles.contact}>
      <h1>Contact Me</h1>
      <img src="/images/Headshot.png" alt="Headshot image of Eli Benveniste wearing a suit and tie"/>
      <p>
        <a href="mailto:eli@benzenesciences.com" className={styles.contactButton}>Email Me</a>
      </p>
      <p>
        <a href="https://www.linkedin.com/in/eli-benveniste" target="_blank" rel="noopener noreferrer" className={styles.contactButton}>
          Connect on LinkedIn
        </a>
      </p>
    </section>
  </>
  );
};

export default Contact;
