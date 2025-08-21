import styles from "./Footer.module.css";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.contact}>
          <p>Check out my GitHub for more projects and contact information🤍</p>
          <a
            href="https://github.com/ekl0225"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.githubLink}
          >
            <FaGithub size={24} /> Visit my GitHub
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;
