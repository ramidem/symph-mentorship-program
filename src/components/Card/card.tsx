import React from "react"

import styles from "./card.module.css"

interface MentorDetails {
  bio: string;
  name: string;
  expertise: string;
  noOfMentees: string;
  image: {
    publicURL: string;
  };
}

const Card = ({mentor, onModalClick}: {mentor: MentorDetails, onModalClick: any}) => {
  const {
    bio,
    image,
    name,
    expertise,
  } = mentor;
  return (
    <div className={styles.card} onClick={() => onModalClick(mentor)}>
      <img src={image.publicURL} width="120" />
      <h3>{name}</h3>
      <span>{expertise}</span>
      <p>{bio}</p>
    </div>
  )
}

export default Card
