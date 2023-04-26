import React from 'react';
import Logo from '../logo/Logo';
import classes from './Navbar.module.css';
import NavUL from './NavUL';

function DesktopNavigation(props) {
  return (
    <header className={props.className}>
      <nav className={classes.navbar}>
        <Logo />
        <NavUL data={props.data} active={props.active} />
      </nav>
    </header>
  );
}

export default DesktopNavigation;
