import * as types from '../actions/types';

const INITIAL_ORDER_INFO = {
  userInfo: {
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    company: '',
    address: '',
    city: '',
    country: '',
  },
  orderInfo: [],
};

const INITIAL_STATE =
  JSON.parse(localStorage.getItem('order')) || INITIAL_ORDER_INFO;

export const checkoutReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.PLACE_ORDER:
      const userInfo = { ...state, userInfo: { ...action.payload } };
      localStorage.setItem('order', JSON.stringify(userInfo));
      return userInfo;
    case types.FETCH_ORDERS_INFO:
      const newOrderInfo = { ...state, orderInfo: [...action.payload] };
      localStorage.setItem('order', JSON.stringify(newOrderInfo));
      return newOrderInfo;
    default:
      return state;
  }
};
