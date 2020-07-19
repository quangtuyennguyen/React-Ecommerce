import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { TABS_CATEGORY } from '../../../../constants';
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
  const productPerRow = 4;
  const rows = children.length / productPerRow;

  const renderRows = () => {
    const result = [];
    for (let i = 0; i < rows; i++) {
      result.push(
        <div key={i} className="row">
          {children.slice(productPerRow * i, productPerRow * i + productPerRow)}
        </div>,
      );
    }
    return result;
  };

  return (
    <Fragment>
      <section id="section-categories" className="u-padding-bottom-regular">
        <Tab
          changeTab={changeTab}
          padding
          heading="Top Categories This Week"
          tabs={TABS_CATEGORY}
          tabIndex={tabIndex}
        />
        {renderRows()}
      </section>
    </Fragment>
  );
}
