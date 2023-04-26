import React from 'react';
import classes from './Grid.module.css';
import OverView from '../Overview/Overview';
import Star from '../Ui/Star';
import { imageUrl } from '../api/request';
import { motion } from 'framer-motion';

function SearchGrid(props) {
  return (
    <div className={classes.popular__container}>
      <React.Fragment>
        {props.data.map((el, i) => {
          return (
            <motion.div
              key={el.id}
              initial={{
                opacity: 0,
                translateX: i % 2 === 0 ? -50 : 50,
                translateY: -50,
              }}
              animate={{ opacity: 1, translateX: 0, translateY: 0 }}
              transition={{ duration: 0.3, delay: i * 0.2 }}
            >
              <div
                className={classes['movies-container']}
                key={el.id}
                onClick={() => props.onClick(el.id, el.media_type)}
              >
                <h2>{el.title || el.original_name || el.name}</h2>
                <img
                  src={el.poster_path ? `${imageUrl}${el.poster_path}` : ''}
                  alt={el.original_title}
                  onError={props.onError}
                  loading="lazy"
                />
                <OverView />
              </div>
              <Star
                rating={props.fn(el.vote_average)}
                ratingfn={props.fn(el.vote_average)}
              />
            </motion.div>
          );
        })}
      </React.Fragment>
    </div>
  );
}

export default SearchGrid;
