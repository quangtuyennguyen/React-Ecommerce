import _ from 'lodash';
import LazyLoad from 'react-lazyload';
import React from 'react';
import Moment from 'react-moment';
import { USERNAME_DATA } from '../constants';

export const resultIndex = (arr, value) =>
  _.findIndex(arr, ({ id }) => id === value);
export const ranDomAvatar = size =>
  `https://randomuser.me/api/portraits/${
    Math.random() > 0.5 ? 'women/' : 'men/'
  }${Math.round(Math.random() * size)}.jpg`;
export const pricePerProduct = ({ price, quantity }) =>
  formatter.format(price * 1.01 * quantity);
export const renderDate = time => <Moment format="MMMM D, YYYY">{time}</Moment>;
export const strToArr = str => str.split(',').map(item => item.trim());
export const randomUsername = () => {
  const index = Math.floor(Math.random() * USERNAME_DATA.length);
  return USERNAME_DATA[index];
};

export const formatProductFields = values => {
  let result = {};
  const { images, sizes, sale, price, rating, discountEndTime } = values;
  if (typeof images === 'string') {
    result = { ...result, images: strToArr(images) };
  }
  if (typeof sizes === 'string' && sizes) {
    result = {
      ...result,
      sizes: strToArr(sizes).map(item => item.toUpperCase()),
    };
  }
  if (sale) {
    result = { ...result, sale };
  }
  const resultFinal = { ...values, ...result };
  !sizes && delete resultFinal.sizes;
  return {
    ...resultFinal,
    price: parseInt(price),
    rating: parseInt(rating),
    discountEndTime: parseInt(discountEndTime),
  };
};

export const fetchDataRequest = (dataRef, actionType, dispatch) =>
  dataRef.on('value', snapshot => {
    const initialData = snapshot.val();
    const newData = Object.values(initialData || []);
    dispatch({ type: actionType, payload: newData });
  });

export const filterProductComments = (comments, id) =>
  _.filter(comments, ({ productId }) => productId === id);

export const countTotalComments = comments =>
  _.reduce(
    comments,
    (a, { replys }) => a + (replys ? Object.keys(replys).length : 0),
    0,
  );

export const countRating = (products, value) =>
  _.filter(products, ({ rating }) => rating === value).length;

export const countTotalRating = comments =>
  _.reduce(comments, (a, { rating }) => a + rating, 0);

export const findKeyData = (id, dataRef) => {
  let key = '';
  dataRef.on('value', snapshot => {
    const initialData = snapshot.val();
    for (let elm in initialData) {
      if (initialData[elm].id === id) {
        key = elm;
      }
    }
  });
  return key;
};

export const pushItem = (item, refData) => refData.push(item);
export const removeItem = (key, refData) => refData.child(key).remove();
export const updateItem = (item, key, refData) => refData.child(key).set(item);

export const renderProducts = (products, ProductItem) =>
  _.map(
    products,
    ({
      id,
      title,
      category,
      subTitle,
      images,
      rating,
      price,
      discountEndTime,
    }) => (
      <LazyLoad key={id} offset={[-100, 200]} throttle={300} height={50}>
        <ProductItem
          id={id}
          title={title}
          subTitle={subTitle}
          images={images}
          rating={rating}
          price={price}
          category={category}
          discountEndTime={discountEndTime}
        />
      </LazyLoad>
    ),
  );

export const searchProduct = (products, value) =>
  _.filter(
    products,
    ({ title }) => title.toLowerCase().indexOf(value.toLowerCase()) !== -1,
  );

export const filterByRangeSlide = (products, { min, max }) =>
  _.filter(products, ({ price }) => price >= min && price <= max);

export const filterBySize = (products, sizeValue) => {
  const newProducts = [];
  const filter = value => {
    return _.filter(products, product => {
      const { id, sizes } = product;
      if (sizes && sizes.indexOf(value) !== -1) {
        if (resultIndex(newProducts, id) === -1) {
          newProducts.push(product);
        }
      }
    });
  };
  for (let i of sizeValue) {
    filter(i);
  }
  return newProducts;
};

export const filterByRating = (products, value) =>
  _.filter(products, ({ rating }) => rating >= value);

export const filterByCategory = (products, value) =>
  _.filter(
    products,
    ({ category }) => _.lowerCase(category) === _.lowerCase(value),
  );

export const sortProducts = (products, { sortBy, sortValue }) =>
  products.sort((a, b) => {
    if (sortBy === 'title') {
      if (a.title < b.title) {
        return -sortValue;
      }
      if (a.title > b.title) {
        return sortValue;
      }
    } else if (sortBy === 'price') {
      if (a.price < b.price) {
        return -sortValue;
      }
      if (a.price > b.price) {
        return sortValue;
      }
    }
    return 0;
  });

export const sortComments = (comments, { sortBy, sortValue }) =>
  comments.sort((a, b) => {
    if (sortBy === 'time') {
      if (a.date < b.date) {
        return -sortValue;
      }
      if (a.date > b.date) {
        return sortValue;
      }
    } else if (sortBy === 'rating') {
      if (a.rating < b.rating) {
        return -sortValue;
      }
      if (a.rating > b.rating) {
        return sortValue;
      }
    }
    return 0;
  });

export const renderRating = rating =>
  _.map([1, 2, 3, 4, 5], number => (
    <i key={number} className={`${number > rating ? 'far' : 'fas'} fa-star`} />
  ));

export const filterAndCountComments = (comments, id) => {
  const newComments = _.filter(comments, ({ postId }) => postId === id);
  const totalReplys = _.reduce(
    newComments,
    (a, { replys }) => a + (replys ? Object.keys(replys).length : 0),
    0,
  );
  return totalReplys + newComments.length;
};

export const renderOptionSizes = sizes =>
  _.map(sizes, size => (
    <option key={size} value={size}>
      {size}
    </option>
  ));

export const countTotalPrice = carts =>
  _.reduce(carts, (a, { price, quantity }) => a + price * quantity, 0);

export const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

export const formatField = str =>
  str
    .split(',')
    .map(elm => elm.trim())
    .filter(elm => elm !== '');

export const findAccount = (accounts, emailCurrent) =>
  _.find(accounts, ({ email }) => email === emailCurrent);
