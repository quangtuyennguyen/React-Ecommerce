import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

CartList.propTypes = {
  children: PropTypes.array,
  handleUpdateCart: PropTypes.func.isRequired,
  cartTotal: PropTypes.number,
  isDisable: PropTypes.bool,
};

CartList.defaultProps = {
  children: [],
};

export default function CartList({
  children,
  handleUpdateCart,
  cartTotal,
  isDisable,
}) {
  return (
    <section id="section-cart">
      {!cartTotal ? (
        <div className="row">
          <div className="alert-empty">
            <i className="fas fa-check-circle" />
            <p className="alert-empty__text">
              No products were added to the cart
            </p>
          </div>
        </div>
      ) : null}
      <div className="row">
        <table className="product-table product-table--cart">
          <tbody>
            <tr>
              <th
                style={{ width: '6.77%' }}
                className="product-table__heading"
              />
              <th
                style={{ width: '15.59%' }}
                className="product-table__heading"
              />
              <th
                style={{ width: '25.08%' }}
                className="product-table__heading"
              >
                Product
              </th>
              <th
                style={{ width: '11.27%' }}
                className="product-table__heading"
              >
                Price
              </th>
              <th
                style={{ width: '23.64%' }}
                className="product-table__heading"
              >
                Quantity
              </th>
              <th
                style={{ width: '12.37%' }}
                className="product-table__heading"
              >
                Subtotal
              </th>
            </tr>
            {!cartTotal ? (
              <tr className="product-table__row-alert">
                <td>
                  <p>No products were added to the cart</p>
                </td>
              </tr>
            ) : null}
            {cartTotal ? children : null}
          </tbody>
        </table>
        {cartTotal ? (
          <div className="btn-group">
            <button
              type="button"
              disabled={isDisable}
              onClick={handleUpdateCart}
              className="btn btn--secondary"
            >
              Update cart
            </button>
            <Link to="/checkout" className="btn btn--secondary">
              Checkout
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
