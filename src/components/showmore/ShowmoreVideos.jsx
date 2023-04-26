import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { MovieContext } from '../store/movie-context';
import { baseUrl, apiKey } from '../api/request';
import ShowmoreVideoGrid from '../Layout/ShowmoreVideoGrid';

function ShowmoreVideos() {
  const params = useParams();
  const ctx = useContext(MovieContext);

  useEffect(() => {
    ctx.fetchingVideos(`${baseUrl}/movie/${params.id}/videos?${apiKey}`);
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.id]);

  return (
    <ShowmoreVideoGrid
      data={ctx.videodata}
      isLoading={ctx.isLoading}
      error={ctx.error}
    />
  );
}

export default ShowmoreVideos;
