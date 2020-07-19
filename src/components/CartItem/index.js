import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import slug from 'slug';
import { formatter, pricePerProduct } from '../../utils';

CartItem.propTypes = {
  product: PropTypes.object,
  handleAddToCart: PropTypes.func.isRequired,
  handleDeleteToCart: PropTypes.func.isRequired,
};

CartItem.defaultProps = {
  product: {},
};

export default function CartItem({
  product,
  handleAddToCart,
  handleDeleteToCart,
}) {
  const { id, images, title, category, price, quantity } = product;
  const carts = JSON.parse(localStorage.getItem('carts')) || [];
  const productInitial = _.find(carts, ({ id: cartId }) => cartId === id);
  return (
    <tr>
      <td>
        <span
          onClick={() => handleDeleteToCart(id)}
          className="product-table__remove u-suggest"
        >
          ×
        </span>
      </td>
      <td>
        <Link to={`/product/${slug(title.toLowerCase())}.${id}`}>
          <img className="product-table__img" src={images[0]} alt="" />
        </Link>
      </td>
      <td>
        <div className="product-table__details">
          <Link
            to={`/product/${slug(title.toLowerCase())}.${id}`}
            className="product-table__name"
          >
            {title}
          </Link>
          <h5 className="product-table__category">
            Category: <span>{category}</span>
          </h5>
        </div>
      </td>
      <td>
        <span className="product-table__price">{formatter.format(price)}</span>
      </td>
      <td>
        <div className="quantity">
          <div className="quantity__count-box">
            <input
              onClick={() => handleAddToCart(id, -1)}
              className="quantity__count"
              type="button"
              value="-"
            />
            <input
              onChange={({ target: { value } }) => handleAddToCart(id, value)}
              className="quantity__amount"
              type="number"
              name="amount"
              value={quantity}
              autoComplete="off"
            />
            <input
              onClick={() => handleAddToCart(id, 1)}
              className="quantity__count"
              type="button"
              value="+"
            />
          </div>
        </div>
      </td>
      <td>
        <span className="product-table__total">
          {pricePerProduct(productInitial)}
        </span>
      </td>
    </tr>
  );
}
