import PropTypes from 'prop-types';
import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';

import Brand from '../../components/Brand';
import Feature from '../../components/Feature';
import ProductCategoryContainar from './ProductsContainer/ProductCategoryContainer';
import ProductHomeContainer from './ProductsContainer/ProductHomeContainer';
import ProductSaleContainer from './ProductsContainer/ProductSaleContainer';
import ProductsPopularContainer from './ProductsContainer/ProductsPopularContainer';

Home.propTypes = {
  products: PropTypes.array,
};

Home.defaultProps = {
  products: [],
};

function Home({ products }) {
  useEffect(() => {
    document.title = 'Home - Shopping';
  });

  return (
    <Fragment>
      <Feature />
      <ProductCategoryContainar products={products} />
      <ProductSaleContainer products={products} />
      <ProductHomeContainer products={products} />
      <ProductsPopularContainer products={products} />
      <Brand />
    </Fragment>
  );
}

const mapStateToProps = state => ({
  products: state.products,
});

export default connect(mapStateToProps)(Home);
