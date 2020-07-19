import * as types from '../actions/types';

export const productCommentReducer = (state = [], action) => {
  switch (action.type) {
    case types.FETCH_PRODUCT_COMMENT:
      return [...action.payload];
    default:
      return state;
  }
};
