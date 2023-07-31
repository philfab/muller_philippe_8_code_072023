import styles from "./Card.module.css";
import { Link } from "react-router-dom";

function Card({ data }) {
  return (
    <Link to={`/card/${data.id}`} className={styles.link}>
    <figure className={styles.figure}>
      <img src={data.cover} alt={data.title} />
      <figcaption>{data.title}</figcaption>
    </figure>
    </Link>
  );
}

export default Card;
