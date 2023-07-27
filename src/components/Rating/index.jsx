import styles from "./Rating.module.css";

function Rating({ rating }) {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <i
      key={index}
      className={`${styles.star} fas fa-star ${index < rating ? styles.red : styles.gray}`}
    ></i>
  ));

  return <span>{stars}</span>;
}

export default Rating;
