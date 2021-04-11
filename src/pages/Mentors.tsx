import { Col, Row } from 'reactstrap';
import { HeadingOne, HeadingParagraph } from '../shared/styledComponents';

function Mentors() {
  return (
    <>
      <Row>
        <Col>
          <HeadingOne>Mentorship Program</HeadingOne>
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
    </>
  );
}

export default Mentors;
