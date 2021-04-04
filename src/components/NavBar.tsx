import useWindowSize from '../hooks/useWindowSize';

import DesktopNavBar from './NavBarMenu/DesktopNavBar';
import MobileNavBar from './NavBarMenu/MobileNavBar';

function NavBar() {
  const size = useWindowSize();

  const isLessThan2000 = size.width as number <= 1200;
  const shouldShowToggleMenu = isLessThan2000 ? <MobileNavBar /> : <DesktopNavBar />;

  return <>{shouldShowToggleMenu}</>;
}

export default NavBar;
