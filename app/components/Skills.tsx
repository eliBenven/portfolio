import styles from './Skills.module.css';

const skills = [
  "JavaScript, TypeScript, React, Node.js",
  "Python, SQL, MongoDB, JSON Web Tokens (JWT)",
  "PowerBI, Tableau, Data Analysis, DAX",
  "AI-driven Automation, Data Visualization, Machine Learning",
  "Network Security, Penetration Testing, Cybersecurity Audits",
  "Microsoft Azure, AWS, Cloud Computing",
  "Version Control (Git), CI/CD Pipelines",
  "RESTful APIs, GraphQL, Web Development (Front-End & Back-End)",
  "MongoDB, MySQL, NoSQL Databases",
  "Responsive Web Design, HTML, CSS, TailwindCSS",
  "Quality Assurance, Testing, Debugging, Performance Optimization",
  "Help Desk Automation, AI Integration, Support Ticket Management",
];

const Skills = () => {
  return (
    <section className={styles.skills}>
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.skillList}>
        {skills.map((skill, index) => (
          <div key={index} className={styles.skill}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
