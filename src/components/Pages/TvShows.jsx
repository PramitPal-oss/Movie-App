import React, { useState } from 'react';
import Navigation from '../Navbar/Navigation';
import TvShowList from '../TvShows/TvShowList';
import TvShowsGenres from '../TvShows/TvShowsGenres';
import { motion } from 'framer-motion';
import { pageAnimation } from '../../animation';

function TvShows() {
  const [currentpage, setCurrentPage] = useState(1);
  const [prevpage, setPrePage] = useState(0);
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Navigation />
      <TvShowsGenres
        currentpage={currentpage}
        setCurrentPage={setCurrentPage}
        prevpage={prevpage}
        setPrePage={setPrePage}
      />
      <TvShowList
        currentpage={currentpage}
        setCurrentPage={setCurrentPage}
        prevpage={prevpage}
        setPrePage={setPrePage}
      />
    </motion.div>
  );
}

export default TvShows;
