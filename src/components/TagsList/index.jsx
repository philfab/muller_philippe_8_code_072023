import { useEffect, useRef } from 'react';
import styles from "./TagsList.module.css";

const TagsList = ({ tags }) => {
    const tagRefs = useRef([]);

    useEffect(() => {
      const maxWidth = Math.max(...tagRefs.current.map(ref => ref.offsetWidth));
      tagRefs.current.forEach(ref => {
        ref.style.width = `${maxWidth}px`;
      });
    }, []);
  
    return (
      <section className={styles.tagList}>
        {tags.map((tag, i) => (
          <p key={tag} ref={ref => tagRefs.current[i] = ref} className={`${styles.tag}`}>
            {tag}
          </p>
        ))}
      </section>
    );
  }
  

export default TagsList;
