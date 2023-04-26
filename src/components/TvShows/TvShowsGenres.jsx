import React, { useEffect, useState, useContext } from 'react';
import { MovieContext } from '../store/movie-context';
import CategoryGrid from '../Layout/CategoryGrid';
import { baseUrl, apiKey } from '../api/request';

function TvShowsGenres({ setCurrentPage, setPrePage }) {
  const [tvGenre, setTvGenre] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const ctx = useContext(MovieContext);

  const fetchingCategories = async function () {
    setIsLoading(true);
    setError(null);
    try {
      const fetchdata = await fetch(
        `${baseUrl}/genre/tv/list?${apiKey}&language=en-US`
      );
      if (!fetchdata.ok) {
        throw new Error('Something Went Wrong');
      }
      const data = await fetchdata.json();
      //console.log(data);
      setTvGenre(data.genres);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchingCategories();
  }, []);

  return (
    <CategoryGrid
      data={tvGenre}
      setactive={ctx.setIsActiveTv}
      active={ctx.isactiveTv}
      setCurrentPage={setCurrentPage}
      setPrePage={setPrePage}
      isLoading={isLoading}
      error={error}
    />
  );
}

export default TvShowsGenres;
