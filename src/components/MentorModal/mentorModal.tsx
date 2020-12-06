import React from "react"
import Modal from 'react-modal';

import styles from "./mentormodal.module.css"

interface MentorDetails {
  bio: string;
  name: string;
  expertise: string;
  noOfMentees: string;
  image: {
    publicURL: string;
  };
}

Modal.setAppElement('#___gatsby')

const MentorModal = ({
  mentor,
  closeModal,
  modalIsOpen
}: {mentor: MentorDetails, closeModal: any, modalIsOpen: any}) => {
  const {
    bio,
    image,
    name,
    expertise,
    noOfMentees,
  } = mentor;
  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.75)'
    },
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : '20%',
      height                : '450px',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };
  
  return (
    <Modal
      style={customStyles}
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
    >
      <div className={styles.modal}>
        <div>
          <img src={image?.publicURL} width="200" />
        </div>
        <div>
          <h2>{name}</h2>
          <span>{expertise} | {noOfMentees} mentee/s</span>
          <p>{bio}</p>
        </div>
      </div>
    </Modal>
  )
}

export default MentorModal
