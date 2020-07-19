import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import { PRODUCT_BANNERS, TAB_HOT_SALE } from '../../../../constants';
import Tab from '../../../Tab';

ProductList.propTypes = {
  children: PropTypes.array,
  changeTab: PropTypes.func.isRequired,
  tabIndex: PropTypes.number,
};

ProductList.defaultProps = {
  tabIndex: 0,
  children: [],
};

export default function ProductList({ children, changeTab, tabIndex }) {
  const renderProductsLeft = () =>
    _.map(PRODUCT_BANNERS, ({ heading, subTitle, title, image }) => (
      <div
        key={title}
        className="product product-sale product-sale-left"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="product__details">
          <p className="product__heading">{heading}</p>
          <h4 className="product__title product__title--sub">{subTitle}</h4>
          <h3 className="product__title">{title}</h3>
          <Link to="/shop" className="btn btn--primary">
            Go shop
          </Link>
        </div>
      </div>
    ));

  return (
    <section id="section-sales">
      <div className="row u-padding-bottom-big u-padding-top-big">
        <div className="col span_1_of_3 u-md-width-full">
          {renderProductsLeft()}
        </div>
        <div className="col span_2_of_3 u-md-width-full">
          <Tab
            changeTab={changeTab}
            heading="Hot Sale"
            tabs={TAB_HOT_SALE}
            tabIndex={tabIndex}
          />
          <div className="row-fluid">{children}</div>
        </div>
      </div>
    </section>
  );
}
