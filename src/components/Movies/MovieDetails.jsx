import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import MovieDetailsGrid from '../Layout/MovieDetailsGrid';
import Footer from '../footer/Footer';
import ShowMore from '../showmore/ShowMore';
import { baseUrl, apiKey } from '../api/request';
import CastGrid from '../Layout/CastGrid';
import VideoGrid from '../Layout/VideoGrid';
import Navigation from '../Navbar/Navigation';
import { motion } from 'framer-motion';
import { pageAnimation } from '../../animation';

function MovieDetails() {
  const [movie, setMovie] = useState([]);
  const [cast, setCast] = useState([]);
  const [videos, setVideos] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState(null);
  const param = useParams();

  const getJson = function (url, msg = 'Something Went Wrong') {
    return fetch(url).then((response) => {
      if (!response.ok) throw new Error(`${msg} ${response.status}`);

      return response.json();
    });
  };

  const fetchingAllData = useCallback(
    async function (id) {
      setisLoading(true);
      setError(null);
      try {
        const response = await Promise.all([
          getJson(
            `${baseUrl}/movie/${param.id}/credits?${apiKey}&language=en-US`
          ),
          getJson(`${baseUrl}/movie/${param.id}/videos?${apiKey}`),
          getJson(`${baseUrl}/movie/${param.id}?${apiKey}&language=en-US`),
        ]);
        setCast(response[0].cast);
        setVideos(response[1].results);
        setMovie(response[2]);
        // console.log(response);
      } catch (error) {
        setError(error.message);
      }
      setisLoading(false);
    },
    [param.id]
  );

  useEffect(() => {
    fetchingAllData();
  }, [fetchingAllData]);

  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Navigation />
      <MovieDetailsGrid
        movie={movie}
        Castelment={
          <CastGrid isLoading={isLoading} error={error} data={cast} />
        }
        videoelement={
          <VideoGrid isLoading={isLoading} error={error} data={videos} />
        }
      />
      <ShowMore />
      <Footer />
    </motion.div>
  );
}

export default MovieDetails;
