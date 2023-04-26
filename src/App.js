import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './components/Routes/Navigation';
import { MovieProvider } from './components/store/movie-context';

function App() {
  return (
    <BrowserRouter>
      <MovieProvider>
        <Navigation />
      </MovieProvider>
    </BrowserRouter>
  );
}

export default App;
