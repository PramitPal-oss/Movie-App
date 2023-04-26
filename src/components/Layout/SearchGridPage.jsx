import React from 'react';
import Pagination from '../Ui/Pagination';
import Spinner from '../Error/Spinner';
import ErrorLoading from '../Error/ErrorLoading';
import SearchGrid from './SearchGrid';

function SearchGridPage(props) {
  return (
    <React.Fragment>
      {!props.isLoading && props.data.length > 0 && (
        <SearchGrid
          data={props.data}
          fn={props.fn}
          onError={props.onError}
          onClick={props.onClick}
        />
      )}
      {!props.isLoading && props.data.length === 0 && !props.error && (
        <ErrorLoading error={'Sorry! No Results Found'} />
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

export default SearchGridPage;
