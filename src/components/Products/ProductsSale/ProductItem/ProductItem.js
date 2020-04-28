
import React from 'react';
import { Link } from 'react-router-dom';
import slug from 'slug';
import { formatter } from '../../../../utils';
import { CountDown } from '../../../CountDown/CountDown';

export const ProductItem = ({ id, title,
  price, sold, available,
  discountEndTime, images
}) => {
  return (
    <div className="col span_1_of_3">
      <div className="product product-sale-right">
        <div className="product__box-image">
          <Link to={`/product/${slug(title.toLowerCase())}.${id}`}>
            <img className="product__img" src={images[0]} alt={title} />
          </Link>
        </div>
        <div className="product__details u-center-text">
          <div className="product__text">
            <Link 
            to={`/product/${slug(title.toLowerCase())}.${id}`} 
              className="product__title product__title--small"
              style={{width: '60%', margin: '0.4rem auto 0.4rem auto'}}
            >{title}</Link>
            <p className="product__price">{formatter.format(price)}</p>
          </div>
          <div className="product__box-progress">
            <div className="product__progress-text">
              <span className="product__progress-text">Already Sold: {sold}</span>
              <span className="product__progress-text">Available: {available}</span>
            </div>
            <div className="product__progress product__progress--1" />
          </div>
          <div className="product__stats-box">
            <h5 className="product__stat-title">
              Hurry up!<span> Offers ends in:</span>
            </h5>
            <CountDown timeEnd={(Date.now() + (((24 * 3600) * discountEndTime)*1000) - 111660000)} />
          </div>
        </div>
      </div>
    </div>
  );
};