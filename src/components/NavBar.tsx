import useWindowSize from "../hooks/useWindowSize";

import DesktopNavBar from "./NavBarMenu/DesktopNavBar";
import MobileNavBar from "./NavBarMenu/MobileNavBar";

function NavBar() {
  const size = useWindowSize()

  const shouldShowToggleMenu =
    (size.width as number) <= 1200 ? <MobileNavBar /> : <DesktopNavBar />

  return <>{shouldShowToggleMenu}</>
}

export default NavBar;
