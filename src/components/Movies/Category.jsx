import React, { useState, useEffect, useContext } from 'react';
import { MovieContext } from '../store/movie-context';
import { baseUrl, apiKey } from '../api/request';
import CategoryGrid from '../Layout/CategoryGrid';

function Category({ setCurrentPage, setPrePage }) {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const ctx = useContext(MovieContext);

  const fetchingCategories = async function () {
    setIsLoading(true);
    setError(null);
    try {
      const fetchdata = await fetch(
        `${baseUrl}/genre/movie/list?${apiKey}&language=en-US`
      );
      if (!fetchdata.ok) {
        throw new Error('Something Went Wrong');
      }
      const data = await fetchdata.json();
      // console.log(data);
      setCategories(data.genres);
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
      data={categories}
      setactive={ctx.setIsActiveMovie}
      active={ctx.isactiveMovie}
      setCurrentPage={setCurrentPage}
      setPrePage={setPrePage}
      isLoading={isLoading}
      error={error}
    />
  );
}

export default Category;
