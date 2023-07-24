import styles from "./FullCard.module.css";
import { useParams, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import data from "../../cardsList.json";

function FullCard() {
  const { id } = useParams(); //hook qui récup les parametres de l'url. (déstructuration, idem à  id = useParams().id; )
  const card = data.find((card) => card.id === id); //recup la card par rapport à l'id
  const navigate = useNavigate(); //change de page programmatiquement

  useEffect(() => {
    if (!card) {
      navigate("/error", {
        state: { errorMessage: "L'ID de la carte n'existe pas." },
      });
    }
  }, [card, navigate]); //si card ou navigate changent useEffect est appelé

  //au cas oû le composant essaie un rendu avant navigate vers la page error
  if (!card) {
    return null;
  }

  return (
    <section>
      <h2>{card.title}</h2>
      <p>{card.description}</p>
    </section>
  );
}

export default FullCard;
