import React from 'react'
import { Link } from 'react-router-dom';
import { formatter } from '../../utils';
import slug from 'slug';

export const WishItem = ({
    id, title, category, handleAddToCart,
    price, images, handleRemoveToWishList
}) => {
    return (
        <tr>
            <td><span
                onClick={() => handleRemoveToWishList(id)}
                className="product-table__remove u-suggest">×</span></td>
            <td>
                <Link to={`/product/${slug(title.toLowerCase())}.${id}`}>
                    <img className="product-table__img" src={images[0]} alt="" />
                </Link>
            </td>
            <td>
                <div className="product-table__details">
                    <Link to={`/product/${slug(title.toLowerCase())}.${id}`} className="product-table__name">{title}</Link>
                </div>
            </td>
            <td><span className="product-table__price">{formatter.format(price)}</span></td>
            <td>
                <span className="product-table__status">In stock</span>
            </td>
            <td>
                <button
                    onClick={() => handleAddToCart({ id, title, category, price, images })}
                    className="btn btn--secondary">Add to cart</button>
            </td>
        </tr>
    );
};