import { FaGithub, FaReact, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import styles from "./Skills.module.css";

export default function Skills() {
  const skills = [
    { name: "JavaScript", icon: <FaJs /> },
    { name: "React", icon: <FaReact /> },
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
  ];

  return (
    <div className={styles.skillsPage}>
      <h1>My Skills</h1>
      <a
        href="https://github.com/ekl0225"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.githubLink}
      >
        <FaGithub size={24} /> Visit my GitHub
      </a>

      <div className={styles.skillsGrid}>
        {skills.map((skill, index) => (
          <div key={index} className={styles.skillCard}>
            <div className={styles.icon}>{skill.icon}</div>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
