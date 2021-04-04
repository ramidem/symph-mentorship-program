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
    <Title href="/">
      Symph Mentorship Program
    </Title>
  );
}

export default SiteTitle;
