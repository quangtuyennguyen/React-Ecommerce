import PropTypes from 'prop-types';
import React, { useState } from 'react';

import ProductItem from '../../../components/Products/ProductsPopular/ProductItem';
import ProductList from '../../../components/Products/ProductsPopular/ProductList';
import { renderProducts } from '../../../utils';

ProductsPopularContainer.propTypes = {
  products: PropTypes.array,
};

ProductsPopularContainer.defaultProps = {
  products: [],
};

export default function ProductsPopularContainer({ products }) {
  const [currentTab, setCurrentTab] = useState({ tabIndex: 0 });
  const { tabIndex } = currentTab;
  const productPerTab = 9;
  const start = tabIndex * productPerTab;
  const end = start + productPerTab;
  const changeTab = (tab, tabIndex) => setCurrentTab({ tabIndex });

  return (
    <ProductList tabIndex={tabIndex} changeTab={changeTab}>
      {renderProducts(products.slice(start, end), ProductItem)}
    </ProductList>
  );
}
