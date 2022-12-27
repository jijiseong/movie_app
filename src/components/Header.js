import { Link } from "react-router-dom";
import styles from "../css/Header.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <Link to="/" className={styles.title}>
        <h1>TVING</h1>
      </Link>
      <nav className={styles.navigator}>
        <Link className={styles.navigatorLink} to="/live">
          실시간 Live
        </Link>
        <Link className={styles.navigatorLink} to="/tv">
          TV 프로그램
        </Link>
        <Link className={styles.navigatorLink} to="/movies">
          영화
        </Link>
      </nav>
      <div></div>
    </div>
  );
}

export default Header;
