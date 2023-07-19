import React, { useState } from "react";
import styles from "./Collapse.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article className={styles.container}>
      <div className={styles.containerData}>
        <span className={styles.title}>{title}</span>
        <FontAwesomeIcon
          icon={faAngleUp}
          className={`${styles.arrow} ${isOpen ? styles.open : ""}`}
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
