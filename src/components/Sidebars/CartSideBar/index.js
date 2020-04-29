import _ from 'lodash';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as actions from '../../../actions';
import { countTotalPrice, formatter } from '../../../utils';
import useEscKeydown from '../../../utils/useEscKeydown';

CartSideBar.propTypes = {
  hideModal: PropTypes.func.isRequired,
};

function CartSideBar({ hideModal }) {
  const state = JSON.parse(localStorage.getItem('carts')) || [];
  const renderProducts = () =>
    _.map(state, ({ id, title, images, price, quantity }) => (
      <li key={id} className="cart-sidebar__item">
        <a href="/" className="cart-sidebar__link">
          <div className="cart-sidebar__box-img">
            <img src={images[0]} alt={title} className="cart-sidebar__img" />
          </div>
          <div className="cart-sidebar__details">
            <span className="cart-sidebar__title">{title}</span>
            <p className="cart-sidebar__price">
              <span>{formatter.format(price)} </span>x {quantity}
            </p>
          </div>
        </a>
      </li>
    ));

  useEscKeydown(() => {
    hideModal();
  });

  return (
    <div className="cart-sidebar">
      <h5 className="cart-sidebar__heading">
        Shopping cart
        <span onClick={hideModal} className="toggleCartSideBar u-suggest">
          ×
        </span>
      </h5>
      {state.length ? (
        <Fragment>
          <ul className="cart-sidebar__list">{renderProducts()}</ul>
          <p className="cart-sidebar__total">
            Subtotal:{' '}
            <span>{formatter.format(countTotalPrice(state) * 1.01)}</span>
          </p>
          <div className="btn-group">
            <Link onClick={hideModal} to="/cart" className="btn btn--secondary">
              View cart
            </Link>
            <Link
              onClick={hideModal}
              to="/checkout"
              className="btn btn--secondary"
            >
              Checkout
            </Link>
          </div>
        </Fragment>
      ) : (
        <p className="cart-sidebar__message">No products in the cart.</p>
      )}
    </div>
  );
}

export default connect(null, actions)(CartSideBar);
