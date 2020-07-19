import PropTypes from 'prop-types';
import React from 'react';
import { TAB_POPULAR } from '../../../../constants';
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
  const productPerRow = 3;
  const rows = children.length / productPerRow;

  const renderRows = () => {
    const result = [];
    for (let i = 0; i < rows; i++) {
      result.push(
        <div key={i} className="row-fluid">
          {children.slice(productPerRow * i, productPerRow * i + productPerRow)}
        </div>,
      );
    }
    return result;
  };

  return (
    <section id="section-popular">
      <div className="row u-padding-top-regular u-padding-bottom-regular">
        <div className="col span_4_of_5">
          <Tab
            changeTab={changeTab}
            row="row-fluid"
            tabs={TAB_POPULAR}
            tabIndex={tabIndex}
          />
          <div className="row-fluid">{renderRows()}</div>
        </div>
        <div className="col span_1_of_5">
          <div className="banner">
            <img
              src="https://res.cloudinary.com/shopping-assets/image/upload/v1584334178/banner_s0nxj2.png"
              alt="Banner home page"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
