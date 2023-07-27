import React, { useState, useRef, useEffect , useCallback} from "react";
import styles from "./Collapse.module.css";

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef();
  const [maxHeight, setMaxHeight] = useState("0px");

  const resizeListener = useCallback(() => {
    setMaxHeight(`${contentRef.current.scrollHeight}px`);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setMaxHeight(`${contentRef.current.scrollHeight}px`);
      window.addEventListener("resize", resizeListener);
    } else {
      setMaxHeight("0px");
      window.removeEventListener("resize", resizeListener);
    }
    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, [isOpen, resizeListener]);


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
        style={{ maxHeight: isOpen ? maxHeight : "0px" }}
        ref={contentRef}
      >
        {children}
      </div>
    </article>
  );
};

export default Collapse;
