import { useState } from "react";
import {
  Collapse,
  Container,
  Nav,
  Navbar,
  NavbarToggler
} from "reactstrap";

import MenuItems from "./MenuItems";
import SiteTitle from "./SiteTitle";

function MobileNavBar() {
  const [collapsed, setCollapsed] = useState(true)
  const toggleNavbar = () => setCollapsed(!collapsed)

  return (
    <Navbar light>
      <Container>
        <SiteTitle />

        <NavbarToggler onClick={() => toggleNavbar()} className="mr-2" />

        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <MenuItems />
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  )
}

export default MobileNavBar;
