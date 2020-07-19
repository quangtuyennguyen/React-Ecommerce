import PropTypes from 'prop-types';
import React from 'react';

import ProductItem from '../../../components/Products/ProductsShop/ProductItem/ProductItemVertical';
import ProductList from '../../../components/Products/ProductsShop/ProductList';
import { renderProducts } from '../../../utils';

ShopGrid.propTypes = {
  products: PropTypes.array,
  name: PropTypes.string,
  category: PropTypes.string,
};

ShopGrid.defaultProps = {
  products: [],
  name: '',
  category: '',
};

function ShopGrid({ products, name, category }) {
  return (
    <ProductList
      products={products}
      productPerRow={3}
      name={name}
      category={category}
      variant="section-products section-products--grid"
    >
      {renderProducts(products, ProductItem)}
    </ProductList>
  );
}

export default ShopGrid;
