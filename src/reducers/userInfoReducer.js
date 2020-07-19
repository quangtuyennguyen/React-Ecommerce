import * as types from '../actions/types';

const INITIAL_STATE = {
  email: '',
  id: null,
  displayName: null,
};

export const userInfoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCH_USER_INFO:
      return { ...action.payload };
    default:
      return state;
  }
};
