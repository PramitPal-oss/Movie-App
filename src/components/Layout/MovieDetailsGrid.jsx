import React from 'react';
import { imageUrlOrginal } from '../api/request';
import classes from './MovieDetail.module.css';
import styled from 'styled-components';

const DeltailsBanner = styled.div`
  margin-top: 0.5rem;
  height: 100vh;
  position: relative;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background-image: linear-gradient(to top, #0f0f0f, #0000);
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(#000000, 0.6);
  }

  @media (max-width: 62.5em) {
    .detail-banner {
      height: 50vh;
    }
  }
`;
/*  className={classes['detail-banner']} */

function MovieDetails(props) {
  return (
    <div className={classes['detail--page']}>
      {props.movie && (
        <>
          <DeltailsBanner
            style={{
              backgroundImage: props?.movie?.backdrop_path
                ? `url(${imageUrlOrginal}${props.movie.backdrop_path})`
                : '',
            }}
          ></DeltailsBanner>
          <div className={classes['movie-content']}>
            <div className={classes['movie-content__poster']}>
              <div
                className={classes['movie-content__poster__img']}
                style={{
                  backgroundImage: props.movie.poster_path
                    ? `url(${imageUrlOrginal}${props?.movie?.poster_path})`
                    : '',
                }}
              ></div>
            </div>
            <div className={classes['movie-content__info']}>
              <h1 className={classes.title}>
                {props.movie.title || props.movie.name}
              </h1>
              <div className={classes.genres}>
                {props.movie.genres &&
                  props.movie.genres.slice(0, 5).map((genre, i) => (
                    <span key={i} className={classes.genres__item}>
                      {genre.name}
                    </span>
                  ))}
              </div>
              <p className={classes.movie__overview}>{props.movie.overview}</p>
              <div className={classes.cast}>
                <div className={classes.section__header}>
                  <h2>Casts</h2>
                </div>
                {props.Castelment}
              </div>
            </div>
          </div>
          <div className={classes.container}>
            <div className={classes.section}>{props.videoelement}</div>
          </div>
        </>
      )}
    </div>
  );
}

export default MovieDetails;
