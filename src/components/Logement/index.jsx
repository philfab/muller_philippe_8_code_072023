import styles from "./Logement.module.css";

function Logement({ data }) {
  return (
    <figure className={styles.figure}>
      <img src={data.cover} alt={data.title} />
      <figcaption>
        <p>{data.title}</p>
      </figcaption>
    </figure>
  );
}

export default Logement;
