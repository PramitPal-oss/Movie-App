import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MovieContext } from '../store/movie-context';
import { baseUrl, apiKey } from '../api/request';
import Navigation from '../Navbar/Navigation';
import { motion } from 'framer-motion';
import { pageAnimation } from '../../animation';
import SearchGridPage from '../Layout/SearchGridPage';

function Search() {
  const [currentpage, setCurrentPage] = useState(1);
  const [prevpage, setPrePage] = useState(0);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchData, setSearchData] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const ctx = useContext(MovieContext);
  const navigate = useNavigate();

  const paginationNext = function () {
    setCurrentPage((prev) => {
      return prev + 1;
    });
  };

  const paginationPre = function () {
    setPrePage((prev) => {
      if (currentpage === 1) return;
      return prev + 1;
    });
  };

  const params = useParams();

  const fetchingSearchData = async function () {
    setIsLoading(true);
    setError(null);
    try {
      const fetchdata = await fetch(
        `${baseUrl}/search/multi?${apiKey}&language=en-US&page=${
          currentpage - prevpage
        }&include_adult=false&query=${params.search}`
      );
      if (!fetchdata.ok) {
        throw new Error('Something Went Wrong');
      }
      const data = await fetchdata.json();
      //console.log(data);
      setSearchData(data.results);
      setTotalPages(data.total_pages);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  };

  const isit = function (id, type) {
    //console.log(id, type);
    if (type === 'tv') navigate('/tvDetails/' + id);
    if (type === 'movie') navigate('/detail/' + id);
  };

  useEffect(() => {
    fetchingSearchData();
    ctx.setIsItHomePage(false);
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.search, currentpage, prevpage]);

  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Navigation />
      <SearchGridPage
        data={searchData}
        onError={ctx.handlerError}
        onClickPre={paginationPre}
        onClickNext={paginationNext}
        disabled={currentpage - prevpage === 1}
        onClick={isit}
        fn={ctx.rating}
        isLoading={isLoading}
        error={error}
        disabledNext={totalPages === currentpage - prevpage}
      />
    </motion.div>
  );
}

export default Search;
