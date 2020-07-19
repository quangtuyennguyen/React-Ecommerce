import {
  postCommentsRef,
  postsRef,
  productCommentsRef,
  productsRef,
} from '../services/firebase';
import {
  fetchDataRequest,
  findKeyData,
  pushItem,
  removeItem,
  updateItem,
} from '../utils';
import * as types from './types';

// Handle fetch user info
export const fetchUserInfo = user => {
  return {
    type: types.FETCH_USER_INFO,
    payload: user,
  };
};

export const adminAuth = data => ({ type: types.ADMIN_AUTH, payload: data });

// Handle product requests
export const fetchProducts = callback => async dispatch => {
  try {
    fetchDataRequest(productsRef, types.FETCH_PRODUCTS, dispatch);
    callback();
  } catch (error) {
    dispatch(showLoading());
    dispatch({
      type: types.FETCH_PRODUCTS_FAILD,
      payload: 'Fetch product faild',
    });
  }
};

export const editProductRequest = product => async () => {
  const { id } = product;
  const key = findKeyData(id, productsRef);
  try {
    updateItem(product, key, productsRef);
  } catch (error) {
    console.log(error);
    // handle when update faild
  }
};

export const addProductRequest = product => async () => {
  try {
    pushItem(product, productsRef);
  } catch (error) {
    console.log(error);
    // handle when update faild
  }
};

export const removeProductRequest = id => async () => {
  const key = findKeyData(id, productsRef);
  try {
    removeItem(key, productsRef);
  } catch (error) {
    console.log(error);
    // handle when update faild
  }
};

// Handle comment products requests
export const fetchProductCommments = callback => async dispatch => {
  try {
    fetchDataRequest(productCommentsRef, types.FETCH_PRODUCT_COMMENT, dispatch);
    callback();
  } catch (error) {
    dispatch({
      type: types.FETCH_PRODUCT_COMMENT_FAILD,
      payload: 'Fetch product faild',
    });
  }
};

export const addProductCommentRequest = comment => async () => {
  try {
    pushItem(comment, productCommentsRef);
  } catch (error) {
    console.log(error);
    // handle add comment faild
  }
};

export const likeAndDislikeRequest = (id, child, value) => async () => {
  try {
    const key = findKeyData(id, productCommentsRef);
    const commentRef = productCommentsRef.child(key);
    let data = 0;
    commentRef.child(child).on('value', snapshot => {
      data = snapshot.val();
    });
    updateItem(data + value, child, commentRef);
  } catch (error) {
    console.log(error);
  }
};

// Handle posts request
export const fetchPosts = callback => async dispatch => {
  try {
    fetchDataRequest(postsRef, types.FETCH_POSTS, dispatch);
    callback();
  } catch (error) {
    console.log(error);
    dispatch({ type: types.FETCH_POSTS_FAILD, payload: 'Fetch posts faild' });
  }
};

// Handle post comments request
export const fetchPostComments = callback => async dispatch => {
  try {
    fetchDataRequest(postCommentsRef, types.FETCH_POST_COMMENTS, dispatch);
    callback();
  } catch (error) {
    console.log(error);
    dispatch({
      type: types.FETCH_POST_COMMENTS_FAILD,
      payload: 'Fetch comment posts faild',
    });
  }
};

export const addPostCommentRequest = (comment, callback) => async () => {
  try {
    pushItem(comment, postCommentsRef);
    callback();
  } catch (error) {
    console.log(error);
    // handle add comment faild
  }
};

export const addReplyRequest = (comment, commentId, callback) => async () => {
  try {
    const key = findKeyData(commentId, postCommentsRef);
    const replysRef = postCommentsRef.child(key).child('replys');
    pushItem(comment, replysRef);
    callback();
  } catch (error) {
    console.log(error);
    // handle add comment faild
  }
};

// Filter products
export const filterByRange = ({ min, max }) => ({
  type: types.FILTER_BY_RANGE_SLIDER,
  payload: { min, max },
});

export const filterBySize = size => ({
  type: types.FILTER_BY_SIZE,
  payload: size,
});

export const clearFilterBySize = callback => {
  callback && callback();
  return { type: types.CLEAR_FILTER_BY_SIZE };
};

export const filterByRating = rating => ({
  type: types.FILTER_BY_RATING,
  payload: rating,
});

export const clearFilterByRating = callback => {
  callback && callback();
  return { type: types.CLEAR_RATING };
};

export const sortProducts = ({ sortBy, sortValue }) => ({
  type: types.SORT_PRODUCT,
  payload: { sortBy, sortValue },
});

export const sortComments = ({ sortBy, sortValue }) => ({
  type: types.SORT_COMMENT,
  payload: { sortBy, sortValue },
});

// Handle cart
export const addToCart = product => ({
  type: types.ADD_TO_CART,
  payload: product,
});

export const changeProductQuantity = (id, value) => ({
  type: types.CHANGE_PRODUCT_QUANTITY,
  payload: { id, value },
});

export const updateCart = () => ({
  type: types.UPDATE_CART,
});

export const deleteToCart = id => ({ type: types.DELETE_TO_CART, payload: id });

export const clearAllFromCart = callback => {
  callback();
  return {
    type: types.CLEAR_ALL_FROM_CART,
  };
};

// Handle wishlish
export const addToWishList = product => ({
  type: types.ADD_TO_WISHLIST,
  payload: product,
});

export const removeToWishList = id => ({
  type: types.DELETE_FROM_WISHLIST,
  payload: id,
});

// Handle search product
export const fetchProductEdit = product => ({
  type: types.FETCH_PRODUCT_EDIT,
  payload: product,
});

export const clearProductEdit = values => ({
  type: types.CLEAR_PRODUCT_EDITTING,
  payload: values,
});

export const searchProduct = search => ({
  type: types.SEARCH_PRODUCT,
  payload: search,
});

// Hadle edit comment
export const fetchCommentProductEdit = comment => ({
  type: types.FETCH_COMMENT_PRODUCT_EDIT,
  payload: comment,
});

// Handle checkout
export const placeOrder = userInfo => ({
  type: types.PLACE_ORDER,
  payload: userInfo,
});

export const fetchOrderInfo = orderInfo => ({
  type: types.FETCH_ORDERS_INFO,
  payload: orderInfo,
});

// Handle toggle modal
export const showModal = component => {
  document.body.className = 'fixed';
  return {
    type: types.SHOW_MODAL,
    payload: component,
  };
};

export const hideModal = () => {
  document.body.removeAttribute('class');
  return {
    type: types.HIDE_MODAL,
  };
};

// Handle toggle loading
export const showLoading = () => {
  return { type: types.SHOW_LOADING };
};

export const hideLoading = () => {
  return { type: types.HIDE_LOADING };
};

export const toggleLoading = (timeout, callback) => async dispatch => {
  dispatch(showLoading());
  setTimeout(() => {
    dispatch(hideLoading());
    callback && callback();
  }, timeout);
};
