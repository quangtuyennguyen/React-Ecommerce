import PropTypes from 'prop-types';
import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import * as actions from '../../actions';
import ShopHeader from '../../components/Header/Shop';
import * as utils from '../../utils';
import ShopGrid from './ShopGrid';

Shop.propTypes = {
  products: PropTypes.array,
  rangeValue: PropTypes.object,
  sizeValue: PropTypes.array,
  ratingValue: PropTypes.number,
  sortValue: PropTypes.object,
  sortProducts: PropTypes.func.isRequired,
  productsBySearch: PropTypes.string,
  toggleLoading: PropTypes.func.isRequired,
};

Shop.defaultProps = {
  products: [],
  rangeValue: {},
  sizeValue: [],
  ratingValue: 0,
  productsBySearch: '',
};

function Shop({
  products,
  rangeValue,
  sizeValue,
  ratingValue,
  sortValue,
  sortProducts,
  productsBySearch,
  toggleLoading,
}) {
  const { category } = useParams();
  const [layout, setLayout] = useState({
    MyComponent: ShopGrid,
    name: 'Grid',
  });

  useEffect(() => {
    if (products.length) {
      toggleLoading(600);
    }
    document.title = 'Shop - Shopping';
  }, [
    products.length,
    toggleLoading,
    rangeValue,
    sizeValue,
    ratingValue,
    sortValue,
    sortProducts,
    productsBySearch,
  ]);

  // filter products
  const filter = () => {
    let newProducts = [];
    if (category) {
      newProducts = utils.filterByCategory(products, category);
    }
    if (rangeValue) {
      newProducts = utils.filterByRangeSlide(
        category ? newProducts : productsBySearch ? productsBySearch : products,
        rangeValue,
      );
    }
    if (sizeValue.length) {
      newProducts = utils.filterBySize(newProducts, sizeValue);
    }
    if (ratingValue) {
      newProducts = utils.filterByRating(newProducts, ratingValue);
    }
    if (sortValue) {
      newProducts = utils.sortProducts(newProducts, sortValue);
    }
    return newProducts;
  };

  const { MyComponent, name } = layout;
  return products.length ? (
    <Fragment>
      <ShopHeader
        totalProduct={filter().length}
        name={name}
        setLayout={setLayout}
        sortProducts={sortProducts}
      />
      <MyComponent category={category} name={name} products={filter()} />
    </Fragment>
  ) : null;
}

const mapStateToProps = state => ({
  products: state.products,
  rangeValue: state.rangeValue,
  sizeValue: state.sizeValue,
  ratingValue: state.ratingValue,
  sortValue: state.sortProductValue,
});

export default connect(mapStateToProps, actions)(Shop);
