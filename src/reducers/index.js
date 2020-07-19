import { combineReducers } from 'redux';

import { productReducer } from './productReducer';
import { productEditReducer } from './productEditReducer';
import { postReducer } from './postReducer';
import { modalReducer } from './modalReducer';
import { loadingReducer } from './loadingReducer';
import { rangeSliderReducer } from './rangeSliderReducer';
import { sizeReducer } from './sizeReducer';
import { ratingReducer } from './ratingReducer';
import { sortProductReducer } from './sortProductReducer';
import { productCommentReducer } from './productCommentReducer';
import { postCommentReducer } from './postCommentReducer';
import { cartReducer } from './cartReducer';
import { wishListReducer } from './wishListReducer';
import { sortCommentReducer } from './sortCommentReducer';
import { searchProductReducer } from './searchProductReducer';
import { checkoutReducer } from './checkoutReducer';
import { userInfoReducer } from './userInfoReducer';
import { adminAuthReducer } from './adminAuthReducer';

export default combineReducers({
  products: productReducer,
  productComments: productCommentReducer,
  productEdit: productEditReducer,
  searchValue: searchProductReducer,
  carts: cartReducer,
  wishLists: wishListReducer,
  rangeValue: rangeSliderReducer,
  sizeValue: sizeReducer,
  ratingValue: ratingReducer,
  sortProductValue: sortProductReducer,
  sortComment: sortCommentReducer,
  posts: postReducer,
  postComments: postCommentReducer,
  modal: modalReducer,
  loading: loadingReducer,
  orderDetails: checkoutReducer,
  userInfo: userInfoReducer,
  isAdminAuth: adminAuthReducer,
});
