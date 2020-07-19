import PropTypes from 'prop-types';
import React from 'react';

import ProductList from '../../../components/ProductDetails/ProductMore/ProductList';
import ProductItem from '../../../components/Products/ProductsShop/ProductItem/ProductItemVertical';
import { renderProducts } from '../../../utils';

ProductRelated.propTypes = {
  otherProducts: PropTypes.array,
  variant: PropTypes.string,
};

ProductRelated.defaultProps = {
  otherProducts: [],
  variant: '',
};

export default function ProductRelated({ otherProducts, variant }) {
  return (
    <section id={variant}>
      <div className="row" style={{ marginBottom: '2rem' }}>
        <h2 className="heading-title--main--medium u-center-text u-margin-top-big">
          Related products
        </h2>
      </div>
      <ProductList variant="u-margin-bottom-big">
        {renderProducts(otherProducts, ProductItem)}
      </ProductList>
    </section>
  );
}
