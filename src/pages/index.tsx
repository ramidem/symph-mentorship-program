import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Card from "../components/Card/card"
import SEO from "../components/seo"
import MentorModal from "../components/MentorModal/mentorModal";

import styles from "./index.module.css"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      dataJson {
        mentors {
          bio
          expertise
          image {
            publicURL
          }
          name
          noOfMentees
        }
      }
    }
  `)

  const { mentors } = data.dataJson;
  interface MentorDetails {
    bio: string;
    name: string;
    expertise: string;
    noOfMentees: string | number;
    image: {
      publicURL: string;
    };
  }

  const renderMentors = (): any => {
    return mentors.map((mentor: MentorDetails) => {
      return (
        <Card
          onModalClick={openModal}
          key={mentor.name}
          mentor={mentor}
        />
      )
    })
  }

  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [activeMentor, setActiveMentor] = React.useState<MentorDetails>();
  function openModal(mentor: any) {
    setIsOpen(true);
    setActiveMentor(mentor);
  }
 
  function closeModal(){
    setIsOpen(false);
  }

  return (
    <Layout>
      <SEO title="Home" />
      <div className={styles.copyDiv}>
        <div className={styles.copy}>
          <h1>Mentorship Program</h1>
          <div className={styles.description}>
            <p>The Symph Mentorship Program creates opportunities to connect, build, and enhance Symphers' knowledge and skills as well as learn from experienced mentors. This activity has the potential to empower, guide, and inspire great minds in Symph to become greater as they venture into their careers.</p>
          </div>
          <div className={styles.linksDiv}>
            <a href="https://bit.ly/symph-mentorship">Learn More</a>
            <a href="https://forms.gle/DLBTke8sBqCWLCXH7">Be a Mentee</a>
          </div>
        </div>
      </div>
      <h2>Our Mentors</h2>
      <div className={styles.mentorsDiv}>
        {renderMentors()}
      </div>
      {activeMentor && (
        <MentorModal
          closeModal={closeModal}
          mentor={activeMentor}
          modalIsOpen={modalIsOpen}
        />
      )}
    </Layout>
  )
}

export default IndexPage
