import styled from 'styled-components';
import { Col, Row } from 'reactstrap';

import { StyledButton } from '../../shared/styledComponents';
import officeGirl from '../../assets/images/office_girl.svg';

const HeadingWrapper = styled.div`
  padding: 165px 0 220px 0;
  background: url(${officeGirl}) no-repeat right;

  p {
    font-size: 24px;
  }
`;

const HeadingOne = styled.h1`
  color: var(--primary-color);
`;

function PageHeading() {
  return (
    <HeadingWrapper>
      <Row>
        <Col md={12} lg={8}>
          <HeadingOne>Mentorship Program</HeadingOne>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <p>
            Create opportunities to connect, build, and enhance your knowledge and
            skills as well as learn from experienced mentors
          </p>
          <StyledButton size="lg" className="mt-3">Learn More</StyledButton>
        </Col>
      </Row>
    </HeadingWrapper>
  );
}

export default PageHeading;
