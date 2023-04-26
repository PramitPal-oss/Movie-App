import React from 'react';
import { Link } from 'react-router-dom';
import bg from '../assets/footer-bg.jpg';
import Logo from '../logo/Logo';
import classes from './Footer.module.css';

function Footer() {
  return (
    <div className={classes.footer} style={{ backgroundImage: `url(${bg})` }}>
      <div className={classes['footer__content']}>
        <Logo
          className={classes['footer--logo']}
          spanClass={classes['footer--span']}
        />
        <div className={classes.footer__content__menus}>
          <div className={classes.footer__content__menu}>
            <Link to="/">Home</Link>
            <Link to="/">Contact us</Link>
            <Link to="/">Term of services</Link>
            <Link to="/">About us</Link>
          </div>
          <div className={classes.footer__content__menu}>
            <Link to="/">Live</Link>
            <Link to="/">FAQ</Link>
            <Link to="/">Premium</Link>
            <Link to="/">Privacy Policy</Link>
          </div>
          <div className={classes.footer__content__menu}>
            <Link to="/">You must watch</Link>
            <Link to="/">Recent release</Link>
            <Link to="/">Top IMDB</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
