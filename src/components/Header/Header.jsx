import { NavLink } from "react-router";
import styles from "./Header.module.css";
import Logo from "../../assets/images/logo-image-white.png";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.imgContainer}>
        <NavLink to="/" className={styles.linkLogo}>
          <img src={Logo} alt="Logo" className={styles.imgLogo} />
          <span>learning</span>
        </NavLink>
      </div>
      <nav className={styles.navigation}>
        <NavLink to="/" className={styles.linkNav}>
          Home
        </NavLink>
        <NavLink to="/game" className={styles.linkNav}>
          Game
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
