import React, { useState } from 'react';
import ShowmoreCasts from './ShowmoreCasts';
import ShowmoreSimilarMovies from './ShowmoreSimilarMovies';
import ShowmoreVideos from './ShowmoreVideos';
import ShowReviews from './ShowReviews';
import classes from './Showmore.module.css';

function ShowmoreCategory() {
  const [isCastShowing, setISCastShowing] = useState(false);
  const [isVideoShowing, setISVideoShowing] = useState(false);
  const [isImagesShowing, setISImagesShowing] = useState(false);
  const [isReviewsShowing, setisReviewsShowing] = useState(false);
  const [isActive, setIsActive] = useState('');

  const btnarr = [
    { name: 'Cast', id: 'e1' },
    { name: 'Similar Movies', id: 'e2' },
    { name: 'Videos and Trailers', id: 'e3' },
    { name: 'Reviews', id: 'e4' },
  ];

  const clickHandler = function (id) {
    if (id === 'e1') {
      setISImagesShowing(false);
      setISVideoShowing(false);
      setISCastShowing(true);
      setisReviewsShowing(false);
      setIsActive(id);
    }
    if (id === 'e2') {
      setISCastShowing(false);
      setISVideoShowing(false);
      setISImagesShowing(true);
      setisReviewsShowing(false);
      setIsActive(id);
    }
    if (id === 'e3') {
      setISVideoShowing(true);
      setISCastShowing(false);
      setISImagesShowing(false);
      setisReviewsShowing(false);
      setIsActive(id);
    }
    if (id === 'e4') {
      setISVideoShowing(false);
      setISCastShowing(false);
      setISImagesShowing(false);
      setisReviewsShowing(true);
      setIsActive(id);
    }
  };

  return (
    <React.Fragment>
      <div className={classes.showmoreCategory}>
        {btnarr.map((el) => (
          <button
            key={el.id}
            className={` ${isActive === el.id ? `${classes.active}` : ''}`}
            onClick={() => clickHandler(el.id)}
          >
            {el.name}
          </button>
        ))}
      </div>
      {isCastShowing && <ShowmoreCasts />}
      {isImagesShowing && <ShowmoreSimilarMovies />}
      {isVideoShowing && <ShowmoreVideos />}
      {isReviewsShowing && <ShowReviews />}
    </React.Fragment>
  );
}

export default ShowmoreCategory;
