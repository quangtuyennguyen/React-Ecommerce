import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import slug from 'slug';
import * as actions from '../../../../actions';
import { TIMER_VALUES } from '../../../../constants';
import { formatter, renderRating } from '../../../../utils';

ProductItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  images: PropTypes.array,
  rating: PropTypes.number,
  category: PropTypes.string,
  addToWishList: PropTypes.func.isRequired,
  toggleLoading: PropTypes.func.isRequired,
};

ProductItem.defaultProps = {
  id: '',
  title: '',
  price: 0,
  images: [],
  rating: 0,
  category: '',
};

function ProductItem({
  id,
  title,
  price,
  category,
  rating,
  images,
  addToWishList,
  toggleLoading,
}) {
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
            <div className="product__rating">{renderRating(rating)}</div>
            <i onClick={handleAddToWishList} className="far fa-heart" />
          </div>
          <Link
            to={`/product/${slug(title.toLowerCase())}.${id}`}
            className="product__title"
          >
            {title}
          </Link>
          <span className="product__price">{formatter.format(price)}</span>
        </div>
      </div>
    </div>
  );
}

export default connect(null, actions)(ProductItem);
