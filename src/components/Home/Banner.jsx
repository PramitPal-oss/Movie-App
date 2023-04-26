/** @format */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import requests from '../api/request';
import classes from './Banner.module.css';

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchdata() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
      return request;
    }
    fetchdata();
  }, []);

  //console.log(movie);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  }

  return (
    <header
      className={classes.banner}
      style={{
        backgroundSize: 'cover',
        backgroundImage: movie.backdrop_path
          ? `linear-gradient(
    180deg,
    transparent,
    rgba(37, 37, 37, 0.3),
    #111
  ),url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`
          : '',
        backgroundPosition: 'top',
      }}
    >
      <div className={classes.banner__contents}>
        <h1 className={classes.banner__title}>
          {movie?.title || movie?.name || movie?.original_mname}
        </h1>
        <p className={classes.banner__description}>
          {truncate(movie?.overview, 150)}
        </p>
      </div>
    </header>
  );
}

export default Banner;
