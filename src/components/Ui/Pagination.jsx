import React from 'react';
import classes from './Pagination.module.css';
import { NavLink } from 'react-router-dom';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';

function Pagination(props) {
  return (
    <React.Fragment>
      <div className={classes.pagination}>
        <button
          onClick={props.onClickPre}
          className={classes.btn}
          disabled={props.disabled}
        >
          <FaAngleLeft />
          Previous
        </button>
        <button
          onClick={props.onClickNext}
          className={classes.btn}
          disabled={props.disabledNext}
        >
          Next
          <FaAngleRight />
        </button>
        <NavLink className={classes.btn} to={'/'}>
          HomePage
        </NavLink>
      </div>
    </React.Fragment>
  );
}

export default Pagination;
