import * as types from '../actions/types';
import { RANGER_VALUES } from '../constants';

const { min, max } = RANGER_VALUES;
const INITIAL_STATE = { min, max };

export const rangeSliderReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FILTER_BY_RANGE_SLIDER:
      const { min, max } = action.payload;
      return {
        ...state,
        min,
        max,
      };
    default:
      return state;
  }
};
