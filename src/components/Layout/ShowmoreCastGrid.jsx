import React from 'react';
import { motion } from 'framer-motion';
import { imageUrl } from '../api/request';
import classes from './ShowmoreCastGrid.module.css';
import ErrorLoading from '../Error/ErrorLoading';
import Spinner from '../Error/Spinner';

function ShowmoreCastGrid(props) {
  return (
    <motion.div layout className={classes['showmore--castgrid']}>
      {!props.isLoading && (
        <React.Fragment>
          {props.data.map((el) => {
            return (
              <div key={el.id}>
                <motion.div
                  layout
                  className={classes['showmore--castgrid__container']}
                  key={el.id}
                  animate={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  exit={{ opacity: 0 }}
                >
                  <img
                    src={el.profile_path ? `${imageUrl}${el.profile_path}` : ''}
                    alt={el.original_title}
                    onError={props.onError}
                    loading="lazy"
                  />
                  <h2>{el.title || el.original_name || el.name}</h2>
                </motion.div>
              </div>
            );
          })}
        </React.Fragment>
      )}
      {!props.isLoading && props.data.length === 0 && !props.error && (
        <ErrorLoading error={'Sorry! No Cast Found'} />
      )}
      {props.isLoading && <Spinner />}
      {!props.isLoading && props.error && <ErrorLoading error={props.error} />}
    </motion.div>
  );
}

export default ShowmoreCastGrid;
