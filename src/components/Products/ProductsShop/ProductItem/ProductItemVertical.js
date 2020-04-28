import React from 'react';
import { connect } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import slug from 'slug';

import * as actions from '../../../../actions';
import { TIMER_VALUES } from '../../../../constants';
import { formatter, renderRating } from '../../../../utils';
import ProductView from '../../../ProductView/ProductView';
import CartSideBar from '../../../Sidebars/CartSideBar/CartSideBar';

const ProductItem = ({
   id, title,
   images, subTitle,
   price, rating, category,
   showModal, sizes,
   addToWishList, addToCart,
   hideModal, toggleLoading
}) => {

   const { id: idParams } = useParams();
   const handleAddToWishList = () => {
      toggleLoading(TIMER_VALUES.main, () => {
         addToWishList({ id, title, price, images, category });
      });
   };

   const handleAddToCart = product => {
      toggleLoading(TIMER_VALUES.main, () => {
         addToCart(product);
         showModal(<CartSideBar />)
      });
   };

   return (
      <div className="col span_1_of_3">
         <div className="product">
            <Link to={`/product/${slug(title.toLowerCase())}.${id}`} target={idParams ? "_blank" : ''}>
               <div className="product__box-image">
                  <img className="product__img u-width-full" src={images[0]} alt={title} />
               </div>
            </Link>
            <div className="product__details">
               <span className="product__heading">{subTitle}</span>
               <Link to={`/product/${slug(title.toLowerCase())}.${id}`} className="product__title product__title--small" target={idParams ? "_blank" : ''}>{title}</Link>
               <div className="u-d-flex-center">
                  <span className="product__price">{formatter.format(price)}</span>
                  <div className="product__rating">
                     {renderRating(rating)}
                  </div>
               </div>
            </div>
            <div className="product__hidden">
               <button
                  onClick={() => handleAddToCart({ id, title, price, images, category, subTitle })}
                  className="btn btn--small btn--secondary">
                  <i className="fas fa-cart-plus" />
                  Add to cart
               </button>
               <button
                  onClick={() => showModal(<ProductView hideModal={hideModal} productCurrent={{ id, images, price, rating, sizes, title, category }} modal />)}
                  className="btn btn--small btn--link">
                  <i className="far fa-eye" />
                  Quick view
               </button>
            </div>
            <i
               onClick={handleAddToWishList}
               className="far fa-heart u-suggest" />
         </div>
      </div>
   );
};

export default connect(null, actions)(ProductItem);
