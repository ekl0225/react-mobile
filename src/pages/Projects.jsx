import React, { useState } from "react";
import styles from "./Projects.module.css";

const projects = [
  {
    id: 1,
    title: "MoodBoards",
    description: "An interactive moodboard viewer with themed color palettes.",
    details:
      "In this project, I built 3 moodboards with toggle functionality...",
  },
  {
    id: 2,
    title: "Todo App",
    description: "A minimal and clean todo list using React state.",
    details:
      "This project uses useState and props to manage and display todos...",
  },
  {
    id: 3,
    title: "Cat Facts",
    description: "Fetches random cat facts from an API and displays them.",
    details: "A good example of using useEffect and API requests in React...",
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  const toggleProject = (id) => {
    setActiveProject(activeProject === id ? null : id);
  };

  return (
    <div className={styles.ProjectGallery}>
      {projects.map((project) => (
        <div
          key={project.id}
          className={`${styles.ProjectCard} ${
            activeProject === project.id ? styles.Active : ""
          }`}
          onClick={() => toggleProject(project.id)}
        >
          <h3>{project.title}</h3>
          <p>{project.description}</p>

          {activeProject === project.id && (
            <div className={styles.ProjectDetails}>
              <p>{project.details}</p>
              <button onClick={() => setActiveProject(null)}>Close</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
