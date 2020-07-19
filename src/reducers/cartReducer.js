import _ from 'lodash';
import * as types from '../actions/types';
import { resultIndex } from '../utils';

const INITIAL_STATE = JSON.parse(localStorage.getItem('carts')) || [];
export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ADD_TO_CART:
      const { id: idAdd, quantity } = action.payload;
      const indexAdd = resultIndex(state, idAdd);
      if (indexAdd === -1) {
        state = [...state, { ...action.payload, quantity: quantity || 1 }];
      } else {
        state[indexAdd].quantity += quantity || 1;
      }
      localStorage.setItem('carts', JSON.stringify([...state]));
      return [...state];
    case types.CHANGE_PRODUCT_QUANTITY:
      let cartChanged = [];
      const { id: idChange, value } = action.payload;
      const indexChange = resultIndex(state, idChange);
      if (typeof value === 'number') {
        if (value === -1 && state[indexChange].quantity === 1) {
          cartChanged = [
            ...Object.assign([...state], {
              [indexChange]: { ...state[indexChange], quantity: 1 },
            }),
          ];
        } else {
          cartChanged = [
            ...Object.assign([...state], {
              [indexChange]: {
                ...state[indexChange],
                quantity: state[indexChange].quantity + value,
              },
            }),
          ];
        }
      } else {
        cartChanged = [
          ...Object.assign([...state], {
            [indexChange]: {
              ...state[indexChange],
              quantity: Math.round(parseInt(value)),
            },
          }),
        ];
      }
      return cartChanged;
    case types.UPDATE_CART:
      const newCarts = [...state.filter(({ quantity }) => quantity)];
      localStorage.setItem('carts', JSON.stringify([...newCarts]));
      return [...newCarts];
    case types.DELETE_TO_CART:
      const { payload: idDelete } = action;
      const cartDeleted = [..._.filter(state, ({ id }) => id !== idDelete)];
      localStorage.setItem('carts', JSON.stringify(cartDeleted));
      return [...cartDeleted];
    case types.CLEAR_ALL_FROM_CART:
      localStorage.removeItem('carts');
      return [];
    default:
      return state;
  }
};
