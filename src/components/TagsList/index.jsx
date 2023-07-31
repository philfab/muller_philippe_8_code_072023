import { useEffect, useRef } from "react";
import styles from "./TagsList.module.css";

const TagsList = ({ tags }) => {
  const tagRefs = useRef([]);

  useEffect(() => {
    const calculateMaxWidth = () => {
      const maxWidth = Math.max(
        ...tagRefs.current.map((ref) => ref.offsetWidth)
      );
      tagRefs.current.forEach((ref) => {
        ref.style.width = `${maxWidth}px`;
      });
    };

    //evite un mauvais redim du composant because la taille de la font
    if ("fonts" in document) {
      //si l'api Font Loading est dispo
      Promise.all(
        //attend que toutes les polices soient chargées puis appelle calculateMaxWidth
        Array.from(document.fonts).map((font) => font.load()) //document.fonts=polices declarees
      ).then(calculateMaxWidth);
    } else {
      window.addEventListener("load", calculateMaxWidth);
    }

    return () => {
      window.removeEventListener("load", calculateMaxWidth);
    };
  }, []);

  return (
    <section className={styles.tagList}>
      {tags.map((tag, i) => (
        <p
          key={tag}
          ref={(ref) => (tagRefs.current[i] = ref)}
          className={`${styles.tag}`}
        >
          {tag}
        </p>
      ))}
    </section>
  );
};

export default TagsList;
