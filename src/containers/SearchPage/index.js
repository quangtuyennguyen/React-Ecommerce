import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { searchProduct } from '../../utils';
import Shop from '../Shop';

SearchPage.propTypes = {
  products: PropTypes.array,
};

SearchPage.defaultProps = {
  products: [],
};
function SearchPage({ products }) {
  const { search } = useLocation();
  const value = search.split('=').pop();
  const productsBySearch = searchProduct(products, value);
  return <Shop productsBySearch={productsBySearch} />;
}
const mapStateToProps = state => ({
  products: state.products,
});

export default connect(mapStateToProps)(SearchPage);
