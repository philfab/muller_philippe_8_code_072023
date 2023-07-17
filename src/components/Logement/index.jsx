import styles from './Logement.module.css';

function Logement({ data }) {
  return (
    <div className={styles.logementImage}>
      <img src={data.cover} alt={data.title} />
      <h2>{data.title}</h2>
    </div>
  );
}

export default Logement;
