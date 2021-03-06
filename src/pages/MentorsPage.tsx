import { useState } from 'react';
import styled from 'styled-components';
import { Col, Row } from 'reactstrap';
import {
  HeadingOne,
  HeadingParagraph,
  LearnMore,
  MentorImageContainer,
} from '../shared/styledComponents';
import { mentors } from '../data/mentors';
import MentorModal from '../components/Modals/MentorModal';

function MentorsPage() {
  const [modal, setModal] = useState(false);
  const [selectedMentor, setSelectedMentor] = useState<any>();
  const toggle = (mentor: any) => {
    setModal(!modal);
    setSelectedMentor(mentor);
  };

  const renderMentorsCards = mentors.map((mentor) => (
    <Col md={6} lg={4} className="mb-3" key={mentor.name}>
      <MentorCard onClick={() => toggle(mentor)}>
        <MentorStatus />
        <MentorDetails>
          <MentorImageContainer>
            <div className="innerImage">
              <img
                src={mentor.image}
                alt={mentor.name}
                width="auto"
                height="100%"
              />
            </div>
          </MentorImageContainer>
          <MentorName>{mentor.name}</MentorName>
          <MentorTitle>{mentor.expertise}</MentorTitle>
        </MentorDetails>
      </MentorCard>
    </Col>
  ));

  return (
    <>
      <MentorsPageHeading>
        <Col>
          <HeadingOne>Our Mentors</HeadingOne>
        </Col>
      </MentorsPageHeading>
      <MentorsPageSubHeading>
        <Col md={6}>
          <HeadingParagraph>
            Level up your career by learning from our experienced mentors. Be
            empowered and inspired as they teach you their expertise.
          </HeadingParagraph>
        </Col>
      </MentorsPageSubHeading>

      <Row>{renderMentorsCards}</Row>

      <LearnMore>
        <div>
          <h6 className="mb-3">Want to learn from them?</h6>
          <a
            href="https://forms.gle/DLBTke8sBqCWLCXH7"
            target="_blank"
            className="btn btn-lg btn-primary"
            rel="noreferrer"
          >
            Become a Mentee
          </a>
        </div>
      </LearnMore>

      <MentorModal toggle={toggle} modal={modal} mentor={selectedMentor} />
    </>
  );
}

export default MentorsPage;

const MentorsPageHeading = styled(Row)`
  margin-top: 90px;
`;

const MentorsPageSubHeading = styled(Row)`
  margin-bottom: 70px;
`;

const MentorCard = styled.div`
  position: relative;
  background-color: white;
  border: 2px solid #f4f4f4;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
`;

const MentorStatus = styled.div`
  position: absolute;
  height: 15px;
  width: 15px;
  background-color: #a1e3b4;
  border-radius: 50%;
  top: 15px;
  right: 15px;
`;

const MentorDetails = styled.div`
  display: flex;
  position: relative;
  padding: 30px;
  height: 100%;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
`;

const MentorName = styled.h2`
  font-size: 18px;
  line-height: 18px;
  color: var(--primary-color);
`;

const MentorTitle = styled.p`
  margin: 0;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1px;
  color: #8c8c8c;
`;
