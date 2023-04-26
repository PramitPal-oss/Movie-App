import React, { useState, createContext, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { reducerfn } from './reducerfn';
import errorImage from '../assets/error.png';

export const MovieContext = createContext();

const InitialState = {
  data: [] || '',
  isLoading: false,
  error: null,
  totalpages: 0,
};

export function MovieProvider(props) {
  const [isactiveMovie, setIsActiveMovie] = useState(28);
  const [isactiveTv, setIsActiveTv] = useState(10759);
  const [apidata, dispatch] = useReducer(reducerfn, InitialState);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [castdata, setCastdata] = useState([]);
  const [videodata, setVideodata] = useState([]);
  const [isitHomePage, setIsItHomePage] = useState(true);

  const fetchingAPi = async function (url) {
    dispatch({ type: 'BEFORE_FETCH' });
    try {
      const res = await axios.get(url);
      if (res.status !== 200) {
        throw new Error('Something Went Wrong');
      }
      dispatch({
        type: 'FETCH_SUCCESS',
        payload: {
          data: res.data?.cast || res.data?.results,
          totalpages: res.data.total_pages,
        },
      });
      //console.log(res.data);
    } catch (error) {
      dispatch({ type: 'ERROR_FETCH', payload: { message: error.message } });
    }
    dispatch({ type: 'FINISH_FETCHING' });
  };

  const fetchingCast = async function (url) {
    setIsLoading(true);
    setError(null);
    try {
      const fetchdata = await fetch(url);
      if (!fetchdata.ok) {
        throw new Error('Something Went Wrong');
      }
      const data = await fetchdata.json();
      // console.log(data);
      setCastdata(data.cast);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  };

  const fetchingVideos = async function (url) {
    setIsLoading(true);
    setError(null);
    try {
      const fetchdata = await fetch(url);
      if (!fetchdata.ok) {
        throw new Error('Something Went Wrong');
      }
      const data = await fetchdata.json();
      // console.log(data);
      setVideodata(data.results);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  };

  const handlerError = function (e) {
    e.target.src = `${errorImage}`;
  };

  const navigate = useNavigate();

  const handleClickMovie = function (id) {
    //setisMovieorTv(true);
    navigate('/detail/' + id);
  };

  const handleClickTv = function (id) {
    //setisMovieorTv(false);
    navigate('/tvDetails/' + id);
  };

  const rating = function (no) {
    const rate = Math.floor(Number(no)) / 2;
    return rate;
  };

  return (
    <MovieContext.Provider
      value={{
        setIsActiveMovie,
        isactiveMovie,
        setIsActiveTv,
        isactiveTv,
        handlerError,
        handleClickMovie,
        handleClickTv,
        apidata,
        fetchingAPi,
        rating,
        isLoading,
        error,
        castdata,
        videodata,
        fetchingVideos,
        fetchingCast,
        isitHomePage,
        setIsItHomePage,
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
}
