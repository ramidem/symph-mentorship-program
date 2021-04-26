import styled from 'styled-components';
import { Col, Row } from 'reactstrap';

import { HeadingOne, HeadingParagraph } from '../../shared/styledComponents';
import officeGirl from '../../assets/images/office_girl.svg';

const HeadingWrapper = styled.div`
  padding: 165px 0 220px 0;
  
  @media (min-width: 992px) {
    background: url(${officeGirl}) no-repeat right;
  }
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
        <Col md={12} lg={6}>
          <HeadingParagraph>
            Create opportunities to connect, build, and enhance your knowledge
            and skills as well as learn from experienced mentors
          </HeadingParagraph>
          <LearnMoreAnchor
            className="btn btn-lg btn-primary"
            href="https://bit.ly/symph-mentorship"
            target="_blank"
            rel="noreferrer"
          >
            Learn More
          </LearnMoreAnchor>
        </Col>
      </Row>
    </HeadingWrapper>
  );
}

export default PageHeading;

const LearnMoreAnchor = styled.a`
  padding: 10px 60px;
  background: #3eb6d0;
  border: none;
  border-radius: 9999px;
  color: #ffffff;

  &:hover, &:active, &:focus {
    background-color: var(--hover-state) !important;
  }
`;
