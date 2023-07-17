import React, { useState, useEffect } from "react";
import Logement from "../../components/Logement";
import data from "../../logements.json";
import styles from "./Home.module.css";
import ImageWithText from "../../components/ImageWithText";
import landscape1 from "../../assets/images/landscape1.png";

function Home() {
  //retourne 2 elems (valeur actu + fonction update), on init avec un array vide
  const [logements, setLogements] = useState([]);

  //useEffect = actions après le rendu .Pas d'arguments donc update au montage du composant et non chaque update
  useEffect(() => {
    setLogements(data);
  }, []);

  return (
    <main>
      <ImageWithText
        imageSrc={landscape1}
        text="Chez vous, partout et ailleurs"
      />
      <section className={styles.gridContainer}>
        {/* itère sur chaque elem  et retourne un composant Logement*/}
        {logements.map((logement) => (
          <Logement key={logement.id} data={logement} />
        ))}
      </section>
    </main>
  );
}

export default Home;
