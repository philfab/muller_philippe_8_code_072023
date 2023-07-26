import { useState, useEffect } from "react";
import arrowLeft from "../../assets/images/arrow_left.png";
import arrowRight from "../../assets/images/arrow_right.png";
import styles from "./Slideshow.module.css";

function Slideshow({ images }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  function nextSlide() {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  }

  function prevSlide() {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + images.length) % images.length
    );
  }

  useEffect(() => {
    //préchargement des images dans le cache (accélère l'affichage des slides)
    images.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  }, [images]);

  
  if (images.length < 2) {
    return (
      <div className={styles.container}>
        {images.length === 1 && (
          <img
            className={styles.currentPicture}
            src={images[currentSlide]}
            alt="Courante"
          />
        )}
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <button
        className={`${styles.arrow} ${styles.arrowLeft}`}
        src={arrowLeft}
        style={{ backgroundImage: `url(${arrowLeft})` }}
        onClick={prevSlide}
        alt="Précédente"
      />
      <button
        className={`${styles.arrow} ${styles.arrowRight}`}
        src={arrowRight}
        style={{ backgroundImage: `url(${arrowRight})` }}
        onClick={nextSlide}
        alt="Suivante"
      />
      <img
        key={currentSlide}
        className={styles.currentPicture}
        src={images[currentSlide]}
        alt="Courante"
      />
      <p>
        {currentSlide + 1} / {images.length}
      </p>
    </div>
  );
}

export default Slideshow;
