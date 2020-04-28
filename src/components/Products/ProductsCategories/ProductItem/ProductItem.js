import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import slug from 'slug';


import * as actions from '../../../../actions';
import { TIMER_VALUES } from '../../../../constants';
import { formatter, renderRating } from '../../../../utils';

const ProductItem = ({
  id, title, price, category,
  rating, images, addToWishList,
  toggleLoading
}) => {
  const handleAddToWishList = () => {
    toggleLoading(TIMER_VALUES.main, () => {
      addToWishList({ id, title, price, images, category });
    });
  };
  return (
    <div className="col span_1_of_4">
      <div className="product product-category">
        <div className="product__box-image">
          <Link to={`/product/${slug(title.toLowerCase())}.${id}`}>
            <img className="product__img" src={images[0]} alt={title} />
          </Link>
        </div>
        <div className="product__details">
          <div className="product__top">
            <div className="product__rating">
              {renderRating(rating)}
            </div>
            <i onClick={handleAddToWishList} className="far fa-heart" />
          </div>
          <Link to={`/product/${slug(title.toLowerCase())}.${id}`} className="product__title">{title}</Link>
          <span className="product__price">{formatter.format(price)}</span>
        </div>
      </div>
    </div>
  );
};

export default connect(null, actions)(ProductItem);
