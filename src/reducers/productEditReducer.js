import * as types from '../actions/types';

const INITIAL_STATE = {};

export const productEditReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCH_PRODUCT_EDIT:
      return { ...action.payload };
    case types.CLEAR_PRODUCT_EDITTING:
      return { ...action.payload };
    default:
      return state;
  }
};
