/** @format */
import React, { useState, useEffect, useContext } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import axios from 'axios';
import { Image_URL } from '../api/request';
import classes from './Row.module.css';
import errorImage from '../assets/error.png';
import Star from '../Ui/Star';
import { MovieContext } from '../store/movie-context';

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setmovies] = useState([]);
  const ctx = useContext(MovieContext);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setmovies(request.data.results);
      return request;
    }
    fetchData();
    ctx.setIsItHomePage(true);
  }, [fetchUrl]);

  const handlerError = function (e) {
    e.target.src = `${errorImage}`;
  };

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  }

  return (
    <div className={classes.row}>
      <h2 className={classes.row__title}>{title}</h2>
      <div className={classes.row__posters}>
        <Splide
          options={{
            perPage: 4,
            arrows: false,
            pagination: false,
            drag: 'free',
            gap: '0.9rem',
            fixedWidth: '15rem',
            padding: '20px',
          }}
        >
          {movies.map((movie) => {
            return (
              <SplideSlide key={movie.id}>
                <div
                  className={classes['row__poster--info']}
                  onClick={() =>
                    isLargeRow
                      ? ctx.handleClickTv(movie.id)
                      : ctx.handleClickMovie(movie.id)
                  }
                >
                  <div className={classes['row__image--container']}>
                    <img
                      key={movie.id}
                      loading="lazy"
                      src={
                        movie.poster_path && movie.backdrop_path
                          ? `${Image_URL}${
                              isLargeRow
                                ? movie.poster_path
                                : movie.backdrop_path
                            }`
                          : ''
                      }
                      alt={movie.title}
                      className={`${classes.row__poster} ${
                        isLargeRow && `${classes.row__posterLarge}`
                      }`}
                      onError={handlerError}
                    />
                  </div>
                  <p className={classes['row__movie--name']}>
                    {movie?.name || movie?.title || movie?.original_title}
                  </p>
                  <p className={classes['row__movie--overview']}>
                    {truncate(movie?.overview, 100)}
                  </p>
                  <Star
                    rating={ctx.rating(movie.vote_average)}
                    ratingfn={ctx.rating(movie.vote_average)}
                  />
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </div>
  );
}

export default Row;
