// /components/Projects.tsx
import styles from './Projects.module.css';

const projects = [
    {
        title: 'AI-Powered Auto Trading Bot',
        description: 'Developed an automated trading bot with python, trained with AI to make trades based on specific AI-driven indicators, optimizing decision-making and trading strategies.',
        image: '/images/autoTradingBot.webp', // Placeholder image path
      },  
      {
        title: 'Help Desk Automation with AI',
        description: 'Implemented AI-driven automation for the help desk, streamlining ticket management and automating common support tasks to improve efficiency and response times.',
        image: '/images/helpDeskAutomation.jpg', // Placeholder image path
      },    
  {
    title: 'Organizational Hierarchy Report (PowerBI)',
    description: 'Developed a report visualizing organizational hierarchies using PowerBI, leveraging complex datasets.',
    image: '/images/OrgChartCensored.jpeg', // Placeholder image path
  },
  {
    title: 'Security Audits (SOC2, HIPAA)',
    description: 'Conducted security audits ensuring compliance with SOC2 and HIPAA regulations.',
    image: '/images/soc2hipaa.png', // Placeholder image path
  },
  {
    title: 'Custom Linux Command System',
    description: 'Developed a custom Linux kernel for a school project, focusing on command-line tools.',
    image: '/images/custom-kernel.png', // Placeholder image path
  },
  
  {
    title: 'Data Integration PowerBI Report',
    description: 'Created a dashboard for shareholders to track data integrations with clients and within the company.',
    image: '/images/dataIntegration.png', // Placeholder image path
  },

];

const Projects = () => {
  return (
    <section className={styles.projects}>
      <h2>Projects</h2>
      <div className={styles.projectGrid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.card}>
            <img src={project.image} alt={project.title} className={styles.image} />
            <div className={styles.cardContent}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
