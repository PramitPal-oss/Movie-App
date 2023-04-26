import React from 'react';
import { useLocation } from 'react-router-dom';
import classes from './Navbar.module.css';
import DesktopNavigation from './DesktopNavigation';
import MobileNavbar from './MobileNavbar';

function Navigation(props) {
  const { pathname } = useLocation();

  const headerarr = [
    { name: 'Home', path: '/', id: 'el1' },
    { name: 'Tv Shows', path: '/tvShows', id: 'el2' },
    { name: ' Genre', path: '/genre', id: 'el3' },
  ];

  const active = headerarr.findIndex((e) => e.path === pathname);

  return (
    <React.Fragment>
      <DesktopNavigation
        data={headerarr}
        active={active}
        className={classes.desktopNavigation}
      />
      <MobileNavbar
        data={headerarr}
        active={active}
        className={classes.mobileNavigation}
      />
    </React.Fragment>
  );
}

export default Navigation;
