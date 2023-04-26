import React, { useContext } from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { AiOutlineStar } from 'react-icons/ai';
import classes from './Star.module.css';
import { MovieContext } from '../store/movie-context';

function Star(props) {
  const ctx = useContext(MovieContext);

  //Array constructor which returns an array:
  const ratingStar = Array.from({ length: 5 }, (_, i) => {
    let fraction = i + 0.5; // [0,1,2,3,4] => 1+0.5 = 1.5 (for fractional no)

    return (
      <span key={i}>
        {props.rating >= i + 1 ? (
          <FaStar className={classes['star--icon']} />
        ) : props.rating >= fraction ? (
          <FaStarHalfAlt className={classes['star--icon']} />
        ) : (
          <AiOutlineStar className={classes['star--icon']} />
        )}
      </span>
    );
  });

  return (
    <React.Fragment>
      <div
        className={`${classes.ratings__info} ${
          ctx.isitHomePage ? `${classes.home}` : `${classes.grid}`
        }`}
      >
        <div className={classes.icons}>{ratingStar}</div>
        <p>
          Ratings: <span>{props.ratingfn}</span>
        </p>
      </div>
    </React.Fragment>
  );
}

export default Star;
