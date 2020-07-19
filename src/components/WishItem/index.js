import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import slug from 'slug';

import { formatter } from '../../utils';

WishItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  category: PropTypes.string,
  handleAddToCart: PropTypes.func.isRequired,
  price: PropTypes.number,
  images: PropTypes.array,
  handleRemoveToWishList: PropTypes.func.isRequired,
};

WishItem.defaultProps = {
  id: '',
  title: '',
  category: '',
  price: 0,
  images: [],
};
export default function WishItem({
  id,
  title,
  category,
  handleAddToCart,
  price,
  images,
  handleRemoveToWishList,
}) {
  return (
    <tr>
      <td>
        <span
          onClick={() => handleRemoveToWishList(id)}
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
        </div>
      </td>
      <td>
        <span className="product-table__price">{formatter.format(price)}</span>
      </td>
      <td>
        <span className="product-table__status">In stock</span>
      </td>
      <td>
        <button
          type="button"
          onClick={() =>
            handleAddToCart({ id, title, category, price, images })
          }
          className="btn btn--secondary"
        >
          Add to cart
        </button>
      </td>
    </tr>
  );
}
