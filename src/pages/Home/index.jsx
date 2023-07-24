import React, { useState, useEffect } from "react";
import Card from "../../components/Card";
import data from "../../cardsList.json";
import styles from "./Home.module.css";
import ImageWithText from "../../components/ImageWithText";
import landscape1 from "../../assets/images/landscape1.png";

function Home() {
  //retourne 2 elems (valeur actu + fonction update), on init avec un array vide
  const [cards, setCards] = useState([]);

  //useEffect = actions après le rendu .Pas d'arguments donc update au montage du composant et non chaque update
  useEffect(() => {
    setCards(data);
  }, []);

  return (
    <main>
      <ImageWithText
        imageSrc={landscape1}
        text="Chez vous, partout et ailleurs"
        brightness={60}
      />
      <section className={styles.gridContainer}>
        {/* itère sur chaque elem  et retourne un composant Card*/}
        {cards.map((card) => (
          <Card key={card.id} data={card} />
        ))}
      </section>
    </main>
  );
}

export default Home;
