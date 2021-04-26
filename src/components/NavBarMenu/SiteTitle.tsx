import React from 'react';
import { Link } from 'react-router-dom';
import { NavbarBrand } from 'reactstrap';
import styled from 'styled-components';

const Title = styled(NavbarBrand)`
  font-size: 24px;
  font-weight: 900;

  & > a {
    color: var(--primary-color)!important;
  }
`;

function SiteTitle() {
  return (
    <Title>
      <Link to="/">Symph Mentorship Program</Link>
    </Title>
  );
}

export default SiteTitle;
