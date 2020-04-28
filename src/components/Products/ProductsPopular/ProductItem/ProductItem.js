import React from 'react';
import { Link } from 'react-router-dom';
import slug from 'slug';
import { formatter } from '../../../../utils';

export const ProductItem = ({ id, title, price, images }) => (
  <div className="col span_1_of_3">
    <div className="product product-category">
      <div className="product__box-image">
        <Link to={`/product/${slug(title.toLowerCase())}.${id}`}>
          <img className="product__img" src={images[0]} alt={title} />
        </Link>
      </div>
      <div className="product__details">
        <Link to={`/product/${slug(title.toLowerCase())}.${id}`} className="product__title">{title}</Link>
        <span className="product__price">{formatter.format(price)}</span>
      </div>
    </div>
  </div>
);