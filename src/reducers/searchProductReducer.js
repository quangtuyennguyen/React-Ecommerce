import * as types from '../actions/types';

const INITIAL_STATE = '';

export const searchProductReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SEARCH_PRODUCT:
      return action.payload;
    default:
      return state;
  }
};
