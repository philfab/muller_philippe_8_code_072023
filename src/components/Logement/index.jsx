import styles from "./Logement.module.css";

function Logement({ data }) {
  return (
    <figure className={styles.figure}>
      <img src={data.cover} alt={data.title} />
      <figcaption>
        {data.title}
      </figcaption>
    </figure>
  );
}

export default Logement;
