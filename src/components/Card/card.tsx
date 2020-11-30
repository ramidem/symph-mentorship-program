import React from "react"
import Image from "../image";

import styles from "./card.module.css"

interface MentorDetails {
  name: string;
  position: string;
  image: {
    publicURL: string;
  };
  bio: string;
}

const Card = ({mentor, onModalClick}: {mentor: MentorDetails, onModalClick: any}) => {
  return (
    <div className={styles.card} onClick={() => onModalClick(mentor)}>
      <img src={mentor.image.publicURL} width="120" />
      <h3>{mentor.name}</h3>
      <p>{mentor.bio}</p>
    </div>
  )
}

export default Card
