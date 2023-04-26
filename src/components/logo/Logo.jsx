import React from 'react';
import classes from './Logo.module.css';
import { NavLink } from 'react-router-dom';

function Logo(props) {
  return (
    <NavLink className={classes.logo} to={'/'}>
      <h2 className={`${classes['logo--heading']} ${props.className}`}>
        <span
          className={`${classes['logo--heading__span']} ${props.spanClass}`}
        >
          P
        </span>
        Square
        <span
          className={`${classes['logo--heading__span']} ${props.spanClass}`}
        >
          F
        </span>
        lix
      </h2>
    </NavLink>
  );
}

export default Logo;
