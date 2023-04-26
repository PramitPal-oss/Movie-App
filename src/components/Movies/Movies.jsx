import React, { useEffect, useContext } from 'react';
import { MovieContext } from '../store/movie-context';
import { baseUrl, apiKey } from '../api/request';
import GridPage from '../Layout/GridPage';

function Movies({ currentpage, setCurrentPage, prevpage, setPrePage }) {
  const ctx = useContext(MovieContext);

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
    // getMoviesByGenre(ctx.isactiveMovie);
    ctx.fetchingAPi(
      `${baseUrl}/discover/movie?${apiKey}&with_genres=${
        ctx.isactiveMovie
      }&page=${currentpage - prevpage}`
    );
    ctx.setIsItHomePage(false);
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ctx.isactiveMovie, currentpage, prevpage]);

  return (
    <React.Fragment>
      <GridPage
        data={ctx.apidata.data} //{urldata}
        onClickPre={paginationPre}
        onClickNext={paginationNext}
        disabled={currentpage - prevpage === 1}
        onError={ctx.handlerError}
        onClick={ctx.handleClickMovie}
        fn={ctx.rating}
        isLoading={ctx.apidata.isLoading}
        error={ctx.apidata.error}
        disabledNext={ctx.apidata.totalpages === currentpage - prevpage}
      />
    </React.Fragment>
  );
}

export default Movies;
