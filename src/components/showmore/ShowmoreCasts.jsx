import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import castError from '../assets/castError.png';
import { MovieContext } from '../store/movie-context';
import { baseUrl, apiKey } from '../api/request';
import ShowmoreCastGrid from '../Layout/ShowmoreCastGrid';

function ShowmoreCasts() {
  const param = useParams();
  const ctx = useContext(MovieContext);

  useEffect(() => {
    ctx.fetchingCast(
      `${baseUrl}/movie/${param.id}/credits?${apiKey}&language=en-US`
    );
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [param.id]);

  const errorHandler = (e) => {
    e.target.src = `${castError}`;
    e.target.style.width = '100%';
    e.target.style.height = '100%';
  };

  return (
    <ShowmoreCastGrid
      data={ctx.castdata}
      onError={errorHandler}
      isLoading={ctx.isLoading}
      error={ctx.error}
    />
  );
}
export default ShowmoreCasts;
