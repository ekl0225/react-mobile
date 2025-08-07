import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.Header}>
      <div className={styles.Navbar}>
        <Link to="/Home" className={styles.NavLink}>
          <p>Home</p>
        </Link>
        <Link to="/MoodBoards" className={styles.NavLink}>
          <p>MoodBoards</p>
        </Link>
        <Link to="/projects" className={styles.NavLink}>
          <p>Projects</p>
        </Link>
      </div>
    </header>
  );
}

export default Header;
