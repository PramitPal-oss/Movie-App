import React from 'react';
import Spinner from '../Error/Spinner';
import ErrorLoading from '../Error/ErrorLoading';
import classes from './MovieDetail.module.css';

function VideoGrid(props) {
  return (
    <div className={classes.video}>
      {!props.isLoading &&
        props.data.length > 0 &&
        props.data.slice(0, 2).map((el) => {
          return (
            <div className={classes.video__info} key={el.id}>
              <h2>{el.name}</h2>
              <iframe
                src={`https://www.youtube.com/embed/${el.key}`}
                width="100%"
                title="video"
                height="600" //600
                allowFullScreen={true}
                className={classes.iframe}
                frameBorder={0}
                loading="lazy"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
          );
        })}
      {!props.isLoading && props.data.length === 0 && !props.error && (
        <ErrorLoading error={'Sorry No trailers & clips Found '} />
      )}
      {props.isLoading && <Spinner />}
      {!props.isLoading && props.error && <ErrorLoading error={props.error} />}
    </div>
  );
}

export default VideoGrid;
