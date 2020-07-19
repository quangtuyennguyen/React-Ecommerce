import * as types from '../actions/types';

const INITIAL_STATE = {
  name: '',
  rating: '',
  body: '',
  pros: '',
  cons: '',
};

export const commentProductEditReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCH_COMMENT_PRODUCT_EDIT:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
