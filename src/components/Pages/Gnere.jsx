import React, { useState } from 'react';
import Category from '../Movies/Category';
import Movies from '../Movies/Movies';
import Navigation from '../Navbar/Navigation';
import { motion } from 'framer-motion';
import { pageAnimation } from '../../animation';

function Genre() {
  const [currentpage, setCurrentPage] = useState(1);
  const [prevpage, setPrePage] = useState(0);

  return (
    <motion.div
      className="genre-page"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Navigation />
      <Category
        currentpage={currentpage}
        setCurrentPage={setCurrentPage}
        prevpage={prevpage}
        setPrePage={setPrePage}
      />
      <Movies
        currentpage={currentpage}
        setCurrentPage={setCurrentPage}
        prevpage={prevpage}
        setPrePage={setPrePage}
      />
    </motion.div>
  );
}

export default Genre;
