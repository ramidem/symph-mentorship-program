import { NavbarBrand } from "reactstrap";
import styled from "styled-components";

function SiteTitle() {
  return (
    <Title>
      <a href="/">Symph Mentorship Program</a>
    </Title>
  )
}

const Title = styled(NavbarBrand)`
  font-size: 24px;
  font-weight: 900;

  a {
    color: var(--primary-color);
  }
`

export default SiteTitle;
