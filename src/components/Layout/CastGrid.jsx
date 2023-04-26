import React from 'react';
import Spinner from '../Error/Spinner';
import ErrorLoading from '../Error/ErrorLoading';
import { imageUrl } from '../api/request';
import classes from './MovieDetail.module.css';

function CastGrid(props) {
  return (
    <div className={classes.casts}>
      {!props.isLoading &&
        props.data.length > 0 &&
        props.data.slice(0, 5).map((item, i) => (
          <div key={i} className={classes.casts__item}>
            <div
              className={classes.casts__item__img}
              style={{
                backgroundImage: item.profile_path
                  ? `url(${imageUrl}${item.profile_path})`
                  : '',
              }}
            ></div>
            <p className={classes.casts__item__name}>{item?.name}</p>
          </div>
        ))}
      {!props.isLoading && props.data.length === 0 && !props.error && (
        <ErrorLoading error={'Sorry! No Cast Found'} />
      )}
      {props.isLoading && <Spinner />}
      {!props.isLoading && props.error && <ErrorLoading error={props.error} />}
    </div>
  );
}

export default CastGrid;
