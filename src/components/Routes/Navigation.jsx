import React, { lazy, Suspense } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Spinner from '../Error/Spinner';
import { AnimatePresence } from 'framer-motion';

function Navigation() {
  const location = useLocation();

  const Genre = lazy(() => import('../Pages/Gnere'));
  const Home = lazy(() => import('../Pages/Home'));
  const Search = lazy(() => import('../Pages/Search'));
  const MovieDetails = lazy(() => import('../Movies/MovieDetails'));
  const TvShows = lazy(() => import('../Pages/TvShows'));
  const TvDetails = lazy(() => import('../TvShows/TvDetails'));

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <Suspense fallback={<Spinner />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/genre"
          element={
            <Suspense fallback={<Spinner />}>
              <Genre />
            </Suspense>
          }
        />
        <Route
          path="/searched/:search"
          element={
            <Suspense fallback={<Spinner />}>
              <Search />
            </Suspense>
          }
        />
        <Route
          path="/detail/:id"
          element={
            <Suspense fallback={<Spinner />}>
              <MovieDetails />
            </Suspense>
          }
        />
        <Route
          path="/tvShows"
          element={
            <Suspense fallback={<Spinner />}>
              <TvShows />
            </Suspense>
          }
        />
        <Route
          path="/tvDetails/:id"
          element={
            <Suspense fallback={<Spinner />}>
              <TvDetails />
            </Suspense>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default Navigation;
