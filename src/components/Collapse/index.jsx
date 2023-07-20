import React, { useState } from "react";
import styles from "./Collapse.module.css";

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article className={styles.container}>
      <div className={styles.containerData}>
        <span className={styles.title}>{title}</span>
        <i
          className={`fas fa-angle-up ${styles.arrow} ${
            isOpen ? styles.open : ""
          }`}
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
      <div
        className={`${styles.containerContent} ${isOpen ? styles.open : ""}`}
      >
        {children}
      </div>
    </article>
  );
};

export default Collapse;
