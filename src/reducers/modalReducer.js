import * as types from '../actions/types';

const INITIAL_STATE = {
  isOpen: false,
  component: null,
};

export const modalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SHOW_MODAL:
      return {
        ...state,
        isOpen: true,
        component: action.payload,
      };
    case types.HIDE_MODAL:
      return {
        ...state,
        isOpen: false,
        component: null,
      };
    default:
      return state;
  }
};
