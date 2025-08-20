import { useState } from "react";
import styles from "./Projects.module.css";

export default function Projects() {
  const projects = [
    {
      title: "Craftsvilla challenge",
      url: "https://craftsvilla-challenge.netlify.app/",
    },
    {
      title: "Pokemon API",
      url: "https://starlit-blini-830ffd.netlify.app/",
    },
    {
      title: "Drumkit",
      url: "https://candid-pothos-307ff1.netlify.app/",
    },
    {
      title: "Cirkle Maker",
      url: "https://fanciful-conkies-9edca9.netlify.app/",
    },
  ];

  const [activeProject, setActiveProject] = useState(null);

  return (
    <div className={styles.projectsWrapper}>
      <h1>My Projects</h1>
      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <div
            key={index}
            className={styles.projectBox}
            onClick={() => setActiveProject(project)}
          >
            <h2 className={styles.title}>{project.title}</h2>
            <p>Click to preview</p>
          </div>
        ))}
      </div>

      {activeProject && (
        <div
          className={styles.modalOverlay}
          onClick={() => setActiveProject(null)}
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className={styles.title}>{activeProject.title}</h2>
            <iframe
              src={activeProject.url}
              width="100%"
              height="500"
              style={{ border: "none" }}
              title={activeProject.title}
            />
            <a
              href={activeProject.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.projectButton}
            >
              Open full project →
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
