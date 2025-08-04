import React, { useState } from "react";
import styles from "./BurgerMenu.module.css";

export default function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <div
        className={`${styles.burgerMenu} ${isOpen ? styles.close : ""}`}
        onClick={toggleMenu}
        role="button"
        aria-label="Toggle menu"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && toggleMenu()}
      >
        <span className={styles.bar}></span>
      </div>

      <nav className={`${styles.menu} ${isOpen ? styles.overlay : ""}`}>
        <ul>
          <li>
            <a href="/aboutme.html" onClick={closeMenu}>
              About Me
            </a>
          </li>
          <li>
            <a href="/projects.html" onClick={closeMenu}>
              Projects
            </a>
          </li>
          <li>
            <a href="/contact.html" onClick={closeMenu}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
