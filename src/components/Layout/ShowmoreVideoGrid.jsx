import React from 'react';
import ErrorLoading from '../Error/ErrorLoading';
import Spinner from '../Error/Spinner';
import classes from './ShowmoreVideoGrid.module.css';
import { motion } from 'framer-motion';

function ShowmoreVideoGrid(props) {
  return (
    <div className={classes['showmore--videogrid']}>
      {!props.isLoading && (
        <React.Fragment>
          {props.data.map((el, i) => {
            return (
              <motion.div
                className={classes['showmore--videogrid__container']}
                key={el.id}
                initial={{
                  opacity: 0,
                  translateX: i % 2 === 0 ? -50 : 50,
                  translateY: -50,
                }}
                animate={{ opacity: 1, translateX: 0, translateY: 0 }}
                transition={{ duration: 0.3, delay: i * 0.2 }}
              >
                <iframe
                  src={`https://www.youtube.com/embed/${el.key}`}
                  width="100%" //"100%"
                  title="video"
                  height="315" //500
                  allowFullScreen={true}
                  className={classes.iframe}
                  loading="lazy"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
              </motion.div>
            );
          })}
        </React.Fragment>
      )}
      {!props.isLoading && props.data.length === 0 && !props.error && (
        <ErrorLoading error={'Sorry! No Videos Found'} />
      )}
      {props.isLoading && <Spinner />}
      {!props.isLoading && props.error && <ErrorLoading error={props.error} />}
    </div>
  );
}

export default ShowmoreVideoGrid;
