import * as types from '../actions/types';

const INITIAL_STATE = localStorage.getItem('isAdminAuth') || false;

export const adminAuthReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ADMIN_AUTH:
      return action.payload;
    default:
      return state && true;
  }
};
