import PropTypes from 'prop-types';
import React from 'react';

WishList.propTypes = {
  children: PropTypes.array,
};

WishList.defaultProps = {
  children: [],
};

export default function WishList({ children }) {
  return (
    <section id="section-wishlist">
      {!children.length ? (
        <div className="row">
          <div className="alert-empty">
            <i className="fas fa-check-circle" />
            <p className="alert-empty__text">
              No products were added to the wishlist
            </p>
          </div>
        </div>
      ) : null}
      <div className="row">
        <table className="product-table product-table--wishlist">
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
                style={{ width: '20.08%' }}
                className="product-table__heading"
              >
                Product Name
              </th>
              <th
                style={{ width: '16.27%' }}
                className="product-table__heading"
              >
                Unit Price
              </th>
              <th
                style={{ width: '20.64%' }}
                className="product-table__heading"
              >
                Stock Status
              </th>
              <th
                style={{ width: '15.37%' }}
                className="product-table__heading"
              />
            </tr>
            {!children.length ? (
              <tr className="product-table__row-alert">
                <td>
                  <p>No products were added to the wishlist</p>
                </td>
              </tr>
            ) : null}
            {children}
          </tbody>
        </table>
      </div>
    </section>
  );
}
