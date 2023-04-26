import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { baseUrl, apiKey } from '../api/request';
import classes from './ShowReviews.module.css';
import ErrorLoading from '../Error/ErrorLoading';
import Spinner from '../Error/Spinner';

function ShowReviews() {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const params = useParams();

  const fecthingSimilarMovies = async function (id) {
    setIsLoading(true);
    setError(null);
    try {
      const fetchdata = await fetch(
        `${baseUrl}/movie/${id}/reviews?${apiKey}&language=en-US&page=1`
      );
      if (!fetchdata.ok) {
        throw new Error('Something Went Wrong');
      }
      const data = await fetchdata.json();
      // console.log(data);
      setReviews(data.results);
      setIsLoading(false);
    } catch (error) {
      setError(error.messgae);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fecthingSimilarMovies(params.id);
  }, [params.id]);

  return (
    <React.Fragment>
      {!isLoading && (
        <div className={classes['showmore--reviews']}>
          {reviews.map((el) => {
            return (
              <div key={el.id} className={classes['showmore--reviews__author']}>
                <h1>{el.author}</h1>
                <p dangerouslySetInnerHTML={{ __html: el.content }}></p>
              </div>
            );
          })}
        </div>
      )}
      {!isLoading && reviews.length === 0 && !reviews.error && (
        <ErrorLoading error={'Sorry! No Reviews Found'} />
      )}
      {isLoading && <Spinner />}
      {!isLoading && error && <ErrorLoading error={error} />}
    </React.Fragment>
  );
}

export default ShowReviews;
