import styles from "./Error.module.css";
import { NavLink } from "react-router-dom";

function Error() {
  return (
    <section className={styles.error}>
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <NavLink to="/" className={styles.activeLink}>
        Retourner sur la page d’accueil
      </NavLink>
    </section>
  );
}

export default Error;
