import _ from 'lodash';
import * as types from '../actions/types';

const resultIndex = (arr, size) => _.findIndex(arr, item => item === size);

const INITIAL_STATE = [];
export const sizeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FILTER_BY_SIZE:
      const { payload } = action;
      const index = resultIndex(state, payload);
      if (index === -1) {
        state.push(payload);
      } else {
        state.splice(index, 1);
      }
      return [...state];
    case types.CLEAR_FILTER_BY_SIZE:
      return [];
    default:
      return state;
  }
};
