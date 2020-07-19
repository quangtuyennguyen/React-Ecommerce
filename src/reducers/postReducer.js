import * as types from '../actions/types';

export const postReducer = (state = [], action) => {
  switch (action.type) {
    case types.FETCH_POSTS:
      return [...action.payload];
    default:
      return state;
  }
};
