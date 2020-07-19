import * as types from '../actions/types';

export const productReducer = (state = [], action) => {
  switch (action.type) {
    case types.FETCH_PRODUCTS:
      return [...action.payload];
    default:
      return state;
  }
};
