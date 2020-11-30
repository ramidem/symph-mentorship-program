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
          name
          position
          image {
            publicURL
          }
          bio
        }
      }
    }
  `)

  const { mentors } = data.dataJson;

  const renderMentors = (): any => {
    return mentors.map(mentor => {
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
  const [activeMentor, setActiveMentor] = React.useState({});
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
      <div className={styles.parent}>
        {renderMentors()}
      </div>
      <MentorModal
        closeModal={closeModal}
        mentor={activeMentor}
        modalIsOpen={modalIsOpen}
      />
    </Layout>
  )
}

export default IndexPage
