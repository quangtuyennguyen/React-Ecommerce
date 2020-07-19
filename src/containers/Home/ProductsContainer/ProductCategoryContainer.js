import _ from 'lodash';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import ProductItem from '../../../components/Products/ProductsCategories/ProductItem';
import ProductList from '../../../components/Products/ProductsCategories/ProductList';
import { renderProducts } from '../../../utils';

ProductCategoryContainar.propTypes = {
  products: PropTypes.array,
};

ProductCategoryContainar.defaultProps = {
  products: [],
};

export default function ProductCategoryContainar({ products }) {
  const [currentTab, setCurrentTab] = useState({ tab: 'Mobile', tabIndex: 0 });
  const changeTab = (tab, index) => setCurrentTab({ tab, tabIndex: index });

  const { tab, tabIndex } = currentTab;
  const filterProducts = () =>
    _.filter(products, ({ category }) => category === tab);

  return (
    <ProductList tabIndex={tabIndex} changeTab={changeTab}>
      {renderProducts(filterProducts().slice(0, 12), ProductItem)}
    </ProductList>
  );
}
