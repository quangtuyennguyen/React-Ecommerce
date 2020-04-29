import PropTypes from 'prop-types';
import React from 'react';
import ProductItem from '../../../components/Products/ProductsShop/ProductItem/ProductItemHorizontal';
import ProductList from '../../../components/Products/ProductsShop/ProductList/ProductList';
import { renderProducts } from '../../../utils';

ShopList.propTypes = {
  products: PropTypes.array,
  name: PropTypes.string,
};

ShopList.defaultProps = {
  products: [],
  name: '',
};

const ShopList = ({ products, name }) => {
  return (
    <ProductList
      productPerRow={1}
      name={name}
      variant="section-products section-products--list"
    >
      {renderProducts(products, ProductItem)}
    </ProductList>
  );
};

export default ShopList;
