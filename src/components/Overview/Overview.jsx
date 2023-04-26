import React from 'react';
import { BsYoutube } from 'react-icons/bs';
import classes from './Overview.module.css';

function OverView() {
  return (
    <React.Fragment>
      <div className={classes.overview}>
        <BsYoutube />
      </div>
    </React.Fragment>
  );
}

export default OverView;
