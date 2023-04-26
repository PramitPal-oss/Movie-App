import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_URL, APIKEY } from '../api/request';
import { MovieContext } from '../store/movie-context';
import GridPage from '../Layout/GridPage';

function ShowmoreImages() {
  const [similar, setSimilar] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalpage, setTotalPages] = useState(null);
  const [currentpage, setCurrentPage] = useState(1);
  const [prevpage, setPrePage] = useState(0);
  const params = useParams();
  const ctx = useContext(MovieContext);
  // console.log(params.id);

  const fecthingSimilarMovies = async function (id) {
    setIsLoading(true);
    setError(null);
    try {
      const fetchdata = await fetch(
        `${BASE_URL}/movie/${id}/similar?api_key=${APIKEY}&language=en-US&page=${
          currentpage - prevpage
        }`
      );
      if (!fetchdata.ok) {
        throw new Error('Something Went Wrong');
      }
      const data = await fetchdata.json();
      // console.log(data);
      setSimilar(data.results);
      setTotalPages(data.total_pages);
      setIsLoading(false);
    } catch (error) {
      setError(error.messgae);
    }
    setIsLoading(false);
  };

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

  useEffect(() => {
    fecthingSimilarMovies(params.id);
    ctx.setIsItHomePage(false);
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.id, currentpage, prevpage]);

  return (
    <GridPage
      data={similar} //{urldata}
      onClickPre={paginationPre}
      onClickNext={paginationNext}
      disabled={currentpage - prevpage === 1}
      onError={ctx.handlerError}
      onClick={ctx.handleClickMovie}
      fn={ctx.rating}
      disabledNext={totalpage === currentpage - prevpage}
      isLoading={isLoading}
      error={error}
    />
  );
}

export default ShowmoreImages;
