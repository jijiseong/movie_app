import { Link } from "react-router-dom";
import styles from "../../css/Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <script
        src="https://kit.fontawesome.com/576e35e919.js"
        crossorigin="anonymous"
      ></script>
      <Link to="/" className={styles.title}>
        <h1>TVING</h1>
      </Link>
      <nav className={styles.navigator}>
        <div className={styles.navLeft}>
          <Link className={styles.navigatorLink} to="/live">
            실시간 Live
          </Link>
          <Link className={styles.navigatorLink} to="/tv">
            TV 프로그램
          </Link>
          <Link className={styles.navigatorLink} to="/movie">
            영화
          </Link>
        </div>
        <div className={styles.navRight}>
          <Link className={styles.navigatorLink} to="/search">
            Search
          </Link>
          <Link className={styles.navigatorLink} to="/user">
            User
          </Link>
        </div>
      </nav>
      <div></div>
    </header>
  );
}

export default Header;
