import styles from "./FullCard.module.css";
import { useParams, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import data from "../../cardsList.json";
import Slideshow from "../../components/Slideshow";
import HostInfo from "../../components/HostInfo";
import TagsList from "../../components/TagsList";
import Rating from "../../components/Rating";
import Collapse from "../../components/Collapse";

function FullCard() {
  const { id } = useParams(); //hook qui récup les parametres de l'url. (déstructuration, idem à  id = useParams().id; )
  const card = data.find((card) => card.id === id); //recup la card par rapport à l'id
  const navigate = useNavigate(); //change de page programmatiquement

  const collapseData = [
    { title: "Description", content: <p>{card.description}</p> },
    {
      title: "Equipements",
      content: card.equipments.map((item, index) => (
        <p className={styles.equipments} key={index}>
          {item}
        </p>
      )),
    },
  ];

  useEffect(() => {
    if (!card) {
      navigate("/error", {
        state: {
          errorMessage: "Oups! Le logement que vous demandez n'existe pas.",
        },
      });
    }
  }, [card, navigate]); //si card ou navigate changent useEffect est appelé

  //au cas oû le composant essaie un rendu avant navigate vers la page error
  if (!card) {
    return null;
  }

  return (
    <main className={styles.container}>
      <Slideshow images={card.pictures} />
      <section className={styles.containerInfos}>
        <header className={styles.containerHeader}>
          <article className={styles.containerLeft}>
            <p className={styles.title}>{card.title}</p>
            <p className={styles.location}>{card.location}</p>
            <TagsList tags={card.tags} />
          </article>
          <article className={styles.containerRight}>
            <HostInfo host={card.host} />
            <Rating rating={card.rating} />
          </article>
        </header>
        <section className={styles.containerFooter}>
            {collapseData.map((data, index) => (
              <Collapse key={index} title={data.title}>
                {data.content}
              </Collapse>
            ))}
        </section>
      </section>
    </main>
    // <main className={styles.container}>
    //   <Slideshow images={card.pictures} />
    //   <section className={styles.containerInfos}>
    //     <header className={styles.row}>
    //       <p className={styles.title}>{card.title}</p>
    //       <HostInfo host={card.host} />
    //     </header>
    //     <p className={styles.location}>{card.location}</p>
    //     <TagsList tags={card.tags} />
    //     <Rating rating={card.rating} />
    //     <article className={styles.containerCollapse}>
    //       {collapseData.map((data, index) => (
    //         <Collapse key={index} title={data.title}>
    //           {data.content}
    //         </Collapse>
    //       ))}
    //     </article>
    //   </section>
    // </main>
  );
}

export default FullCard;
