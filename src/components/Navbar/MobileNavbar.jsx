import React, { useState } from 'react';
import classes from './Navbar.module.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';
import NavUL from './NavUL';
import Logo from '../logo/Logo';

function MobileNavbar(props) {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <header className={props.className}>
      <nav className={classes.navbar}>
        <Logo />
        {showMediaIcons ? (
          <NavUL data={props.data} active={props.active} />
        ) : (
          ''
        )}
        <button
          className={classes['hamburger-menu']}
          onClick={() => setShowMediaIcons(!showMediaIcons)}
        >
          <GiHamburgerMenu className={classes['icon-open']} />
          <GrClose className={classes['icon-close']} />
        </button>
      </nav>
    </header>
  );
}

export default MobileNavbar;
