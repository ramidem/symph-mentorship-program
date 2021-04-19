import { Col, Row } from 'reactstrap';
import styled from 'styled-components';
import { HeadingOne, HeadingParagraph } from '../shared/styledComponents';
import { mentors } from '../data/mentors';

// import mentorImg from '../assets/images/mentor.png';

const MentorCard = styled.div`
  position: relative;
  background-color: white;
  border: 2px solid #F4F4F4;
  border-radius: 20px;
  overflow: hidden;
`;

const MentorStatus = styled.div`
  position: absolute;
  height: 15px;
  width: 15px;
  background-color: #A1E3B4;
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

const MentorImageContainer = styled.div`
  margin-bottom: 30px;
  padding: 10px;
  height: 165px;
  width: 165px;
  background-color: white;
  border: 1px solid var(--primary-color);
  border-radius: 9999px;
  
  .innerImage {
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    overflow: hidden;
    text-align: center;
  }
`;

const MentorName = styled.h2`
font-size: 24px;
line-height: 29px;
color: var(--primary-color);
`;

const MentorTitle = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: 700;
  color: #8C8C8C;
`;

function MentorsPage() {
  const renderMentors = mentors.map((item) => (
    <Col md={6} lg={4}>
      <MentorCard>
        <MentorStatus />
        <MentorDetails>
          <MentorImageContainer>
            <div className="innerImage">
              <img
                src={item.image}
                alt={item.name}
                width="auto"
                height="100%"
              />
            </div>
          </MentorImageContainer>
          <MentorName>{item.name}</MentorName>
          <MentorTitle>{item.expertise}</MentorTitle>
        </MentorDetails>
      </MentorCard>
    </Col>
  ));

  return (
    <>
      <Row>
        <Col>
          <HeadingOne>Our Mentors</HeadingOne>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <HeadingParagraph>
            Level up your career by learning from our experienced mentors.
            Be empowered and inspired as they teach you their expertise.
          </HeadingParagraph>
        </Col>
      </Row>

      <Row>
        {renderMentors}
      </Row>
    </>
  );
}

export default MentorsPage;
