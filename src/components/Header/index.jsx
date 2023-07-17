import logo from "../../assets/images/logo_h.png";
import { NavLink, useMatch } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  const matchHome = useMatch("/");
  const matchAbout = useMatch("/about");

  return (
    <header>
      <img src={logo} alt="Logo" className={styles.logo} />
      <nav>
        <NavLink
          to="/"
          className={matchHome ? styles.activeLink : styles.nonActiveLink}
        >
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          className={matchAbout ? styles.activeLink : styles.nonActiveLink}
        >
          A Propos
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
