import React from 'react';
import slug from 'slug';
import { formatter } from '../../utils';

export const SearchItem = ({ title, id, images, price }) => {
    return (
        <li className="search-result__item">
            <a href="/" className="search__result__link">
                <div className="product">
                    <div className="product__box-image">
                        <a href={`/product/${slug(title.toLowerCase())}.${id}`}>
                            <img className="product__img" src={images[0]} alt={title} />
                        </a>
                    </div>
                    <div className="product__details">
                        <a href={`/product/${slug(title.toLowerCase())}.${id}`} className="product__title">{title}</a>
                        <span className="product__price">{formatter.format(price)}</span>
                    </div>
                </div>
            </a>
        </li>
    );
};
