import * as types from '../actions/types';

export const postCommentReducer = (state = [], action) => {
  switch (action.type) {
    case types.FETCH_POST_COMMENTS:
      return [...action.payload];
    default:
      return state;
  }
};
