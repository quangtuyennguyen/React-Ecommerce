import _ from 'lodash';
import * as types from '../actions/types';
import { resultIndex } from '../utils';

const INITIAL_STATE = JSON.parse(localStorage.getItem('wishList')) || [];

export const wishListReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ADD_TO_WISHLIST:
      const { id } = action.payload;
      const indexAdd = resultIndex(state, id);
      if (indexAdd === -1) {
        state = [...state, action.payload];
      }
      localStorage.setItem('wishList', JSON.stringify([...state]));
      return [...state];
    case types.DELETE_FROM_WISHLIST:
      const indexDelete = resultIndex(state, action.payload);
      localStorage.setItem(
        'wishList',
        JSON.stringify([
          ..._.filter(state, ({ id }) => id !== state[indexDelete].id),
        ]),
      );
      return [..._.filter(state, ({ id }) => id !== state[indexDelete].id)];
    default:
      return state;
  }
};
