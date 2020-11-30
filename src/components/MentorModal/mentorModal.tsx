import React from "react"
import Modal from 'react-modal';

import styles from "./mentormodal.module.css"

interface MentorDetails {
  name: string;
  position: string;
  image: {
    publicURL: string;
  };
  bio: string;
}

Modal.setAppElement('#___gatsby')

const MentorModal = ({
  mentor,
  closeModal,
  modalIsOpen
}: {mentor: MentorDetails, closeModal: any, modalIsOpen: any}) => {
  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.75)'
    },
    content : {
      top                   : '40%',
      left                  : '50%',
      right                 : '20%',
      bottom                : '10%',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };
  
  return (
    <Modal
      style={customStyles}
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
    >
      <div className={styles.modal}>
        <div>
          <img src={mentor?.image?.publicURL} width="200" />
        </div>
        <div>
          <h2>{mentor.name}</h2>
          <p>{mentor.bio}</p>
        </div>
      </div>
    </Modal>
  )
}

export default MentorModal
