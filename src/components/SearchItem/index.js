import PropTypes from 'prop-types';
import React from 'react';
import slug from 'slug';

import { formatter } from '../../utils';

SearchItem.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  images: PropTypes.array,
  price: PropTypes.number,
};

SearchItem.defaultProps = {
  title: '',
  id: '',
  images: [],
  price: 0,
};

export default function SearchItem({ title, id, images, price }) {
  return (
    <li className="search-result__item">
      <div className="product">
        <div className="product__box-image">
          <a href={`/product/${slug(title.toLowerCase())}.${id}`}>
            <img className="product__img" src={images[0]} alt={title} />
          </a>
        </div>
        <div className="product__details">
          <a
            href={`/product/${slug(title.toLowerCase())}.${id}`}
            className="product__title"
          >
            {title}
          </a>
          <span className="product__price">{formatter.format(price)}</span>
        </div>
      </div>
    </li>
  );
}
