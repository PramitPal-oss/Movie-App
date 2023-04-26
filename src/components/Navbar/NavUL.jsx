import React from 'react';
import { NavLink } from 'react-router-dom';
import Search from '../Search/Search';
import classes from './Navbar.module.css';

function NavUL(props) {
  return (
    <ul className={classes.navlists}>
      {props.data.map((el, i) => {
        return (
          <NavLink
            to={el.path}
            key={el.id}
            className={`${classes.navlink} ${
              props.active === i ? `${classes.activeNav}` : ''
            }`}
          >
            {el.name}
          </NavLink>
        );
      })}
      <Search />
    </ul>
  );
}

export default NavUL;
