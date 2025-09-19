import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./BurgerMenu.module.css";

export default function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const currentPath = location.pathname.toLowerCase();

  return (
    <>
      <div
        className={`${styles.BurgerMenu} ${isOpen ? styles.close : ""}`}
        onClick={toggleMenu}
        role="button"
        aria-label="Toggle menu"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && toggleMenu()}
      >
        <span className={styles.Bar}></span>
      </div>

      <nav className={`${styles.Menu} ${isOpen ? styles.overlay : ""}`}>
        <ul>
          {currentPath !== "/" && (
            <li>
              <Link to="/" onClick={closeMenu}>
                Home
              </Link>
            </li>
          )}
          {currentPath !== "/moodboards" && (
            <li>
              <Link to="/moodboards" onClick={closeMenu}>
                MoodBoards
              </Link>
            </li>
          )}
          {currentPath !== "/projects" && (
            <li>
              <Link to="/projects" onClick={closeMenu}>
                Projects
              </Link>
            </li>
          )}
          {currentPath !== "/skills" && (
            <li>
              <Link to="/skills" onClick={closeMenu}>
                Skills
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
}
