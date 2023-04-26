import React from 'react';
import Grid from './Grid';
import Pagination from '../Ui/Pagination';
import Spinner from '../Error/Spinner';
import ErrorLoading from '../Error/ErrorLoading';

function GridPage(props) {
  return (
    <React.Fragment>
      {!props.isLoading && (
        <Grid
          data={props.data}
          fn={props.fn}
          onError={props.onError}
          onClick={props.onClick}
        />
      )}
      {!props.isLoading && props.data.length === 0 && !props.error && (
        <ErrorLoading error={'Sorry! No Movies Found'} />
      )}
      {props.isLoading && <Spinner />}
      {!props.isLoading && props.error && <ErrorLoading error={props.error} />}
      <Pagination
        onClickPre={props.onClickPre}
        onClickNext={props.onClickNext}
        disabled={props.disabled}
        disabledNext={props.disabledNext}
      />
    </React.Fragment>
  );
}

export default GridPage;
