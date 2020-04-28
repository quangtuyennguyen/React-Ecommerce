import slug from 'slug';
import React from 'react';
import { Link } from 'react-router-dom';
import { formatter } from '../../../../utils';



export const ProductItem = ({ id, title, images, price }) => (
  <div className="col span_1_of_4">
    <div className="product product-woman">
      <div className="product__box-image u-center-text">
        <Link to={`/product/${slug(title.toLowerCase())}.${id}`}>
          <img className="product__img" src={images[0]} alt={title} />
        </Link>
      </div>
      <div className="product__details u-center-text">
        <Link to={`/product/${slug(title.toLowerCase())}.${id}`} className="product__title product__title--small">{title}</Link>
        <div className="product__box-price">
          <span className="product__price product__price--new">{formatter.format(price)}</span>
          <span className="product__price product__price--old">{formatter.format(Math.round(price * 1.2))}</span>
        </div>
      </div>
    </div>
  </div>
);