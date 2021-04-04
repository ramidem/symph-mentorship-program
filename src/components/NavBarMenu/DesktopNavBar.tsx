import {
  Container,
  Nav,
  Navbar,
} from "reactstrap";

import MenuItems from "./MenuItems";
import SiteTitle from "./SiteTitle";

function DesktopNavBar() {
  return (
    <Navbar light expand="md" className="my-1">
      <Container>
        <SiteTitle />

        <Nav navbar className="mr-0 d-flex align-items-center">
          <MenuItems />
        </Nav>
      </Container>
    </Navbar>
  )
}

export default DesktopNavBar;
