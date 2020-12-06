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
      <h1>Mentorship Program</h1>
      <div>
        <p>The Symph Mentorship Program creates opportunities to connect, build, and enhance Symphers' knowledge and skills as well as learn from experienced mentors. This activity has the potential to empower, guide, and inspire great minds in Symph to become greater as they venture into their careers.</p>
      </div>
      <div className={styles.linksDiv}>
        <a href="http://bit.ly/symph-mentorship-program">Learn More</a>
        <a href="#">Be a Mentee</a>
      </div>
      <div className={styles.parent}>
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
