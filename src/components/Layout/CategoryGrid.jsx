import React from 'react';
import ErrorLoading from '../Error/ErrorLoading';
import Spinner from '../Error/Spinner';
import { motion } from 'framer-motion';
import classes from './CategoryGrid.module.css';

function CategoryGrid(props) {
  return (
    <div className={classes['genre-container']}>
      {!props.isLoading && (
        <React.Fragment>
          {props.data.map((el) => (
            <motion.button
              key={el.id}
              onClick={() => {
                props.setactive(el.id);
                props.setCurrentPage(1);
                props.setPrePage(0);
              }}
              className={props.active === el.id ? `${classes.active}` : ''}
              whileHover={{ scale: 1.2 }}
              whileTap={{
                scale: 0.8,
                borderRadius: '100%',
              }}
            >
              {el.name}
            </motion.button>
          ))}
        </React.Fragment>
      )}
      {!props.isLoading && props.data.length === 0 && !props.error && (
        <ErrorLoading error={'Sorry! No Cast Found'} />
      )}
      {props.isLoading && <Spinner />}
      {!props.isLoading && props.error && <ErrorLoading error={props.error} />}
    </div>
  );
}

export default CategoryGrid;
