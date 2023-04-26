export const reducerfn = function (state, action) {
  if (action.type === 'BEFORE_FETCH') {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === 'FETCH_SUCCESS') {
    return {
      ...state,
      isLoading: false,
      data: action.payload.data,
      totalpages: action.payload.totalpages,
    };
  }
  if (action.type === 'ERROR_FETCH') {
    return {
      ...state,
      error: action.payload.message,
    };
  }

  if (action.type === 'FINISH_FETCHING') {
    return {
      ...state,
      isLoading: false,
    };
  }

  return state;
};
