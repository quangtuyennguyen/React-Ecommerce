import PropTypes from 'prop-types';
import React from 'react';
import { ProductList } from '../../../components/ProductDetails/ProductMore/ProductList/ProductList';
import ProductItem from '../../../components/Products/ProductsShop/ProductItem/ProductItemVertical';
import { renderProducts } from '../../../utils';

ProductsOther.propTypes = {
  products: PropTypes.array,
  sectionId: PropTypes.string,
  heading: PropTypes.string,
};

ProductsOther.defaultProps = {
  products: [],
  sectionId: '',
  heading: '',
};

export const ProductsOther = ({ products, sectionId, heading }) => {
  return (
    <section id={sectionId}>
      <div className="row">
        <h2 className="heading-title--main--medium u-center-text u-margin-top-big">
          {heading}
        </h2>
      </div>
      <ProductList>{renderProducts(products, ProductItem)}</ProductList>
    </section>
  );
};
