import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';

import BreadCrumb from '../BreadCrumb';
import { formatter, renderDate } from '../../utils';

OrderDetails.propTypes = {
  children: PropTypes.array,
  totalPrice: PropTypes.number,
};

OrderDetails.defaultProps = {
  children: [],
  totalPrice: 0,
};

function OrderDetails({ children, totalPrice }) {
  const { orderNumber } = useParams();
  const now = new Date();
  return (
    <Fragment>
      <BreadCrumb pageVariant="Checkout" />
      <section
        id="section-order-details"
        className="order-details u-margin-top-medium u-margin-bottom-medium"
      >
        <div className="row">
          <p className="order-details__text">
            Thank you. Your order has been received.
          </p>
          <ul className="order-stat">
            <li className="order-stat__item">
              <span className="order-stat__text-title">ORDER NUMBER:</span>
              <h5 className="order-stat__text-main">{orderNumber}</h5>
            </li>
            <li className="order-stat__item">
              <span className="order-stat__text-title">DATE:</span>
              <h5 className="order-stat__text-main">{renderDate(now)}</h5>
            </li>
            <li className="order-stat__item">
              <span className="order-stat__text-title">TOTAL:</span>
              <h5 className="order-stat__text-main order-stat__text-main--blue">
                {formatter.format(totalPrice * 1.01)}
              </h5>
            </li>
            <li className="order-stat__item">
              <span className="order-stat__text-title">PAYMENT METHOD:</span>
              <h5 className="order-stat__text-main">Cash on delivery</h5>
            </li>
          </ul>
        </div>
        <div className="row ">
          <p className="order-details__text">Pay with cash upon delivery.</p>
          <h3 className="heading-title--main--medium">Order details</h3>
        </div>
        <div className="row">
          <table className="product-table product-table--checkout">
            <tbody>
              <tr>
                <th style={{ width: '70%' }} className="product-table__heading">
                  Product
                </th>
                <th
                  style={{ width: '30%' }}
                  className="product-table__heading u-padding-horizontal"
                >
                  Subtotal
                </th>
              </tr>
              {children}
              <tr>
                <td>
                  <h5 className="product-table__heading">Shipping</h5>
                </td>
                <td>
                  <h5 className="product-table__heading u-padding-horizontal">
                    {formatter.format(totalPrice * 1.01 - totalPrice)}
                  </h5>
                </td>
              </tr>
              <tr>
                <td>
                  <h5 className="product-table__heading">Total</h5>
                </td>
                <td>
                  <h5 className="product-table__price">
                    {formatter.format(totalPrice * 1.01)}
                  </h5>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </Fragment>
  );
}

export default OrderDetails;
