import _ from 'lodash';
import PropTypes from 'prop-types';
import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductDetails from '../../components/ProductDetails';
import ProductView from '../../components/ProductView';
import ProductRelated from './ProductRelated';

ProductDetailsContainer.propTypes = {
  products: PropTypes.array,
};

ProductDetailsContainer.defaultProps = {
  products: [],
};

function ProductDetailsContainer({ products }) {
  let { title, id } = useParams();
  title = title.split('-').join(' ');
  const firstLetter = title
    .split('')
    .shift()
    .toUpperCase();

  useEffect(() => {
    document.title = `${firstLetter}${title.replace(title[0], '')} - Product`;
  }, [firstLetter, title]);

  const findProductCurrent = () =>
    _.find(products, product => product.id === id);
  const productCurrent = findProductCurrent();
  const { category: categoryCurrent } = productCurrent || {};
  const otherProducts = [
    ..._.filter(products, ({ category }) => category === categoryCurrent),
  ];
  return productCurrent ? (
    <Fragment>
      <ProductDetails category={categoryCurrent}>
        <ProductView productCurrent={productCurrent} />
      </ProductDetails>
      <ProductRelated
        otherProducts={[
          ..._.filter(otherProducts, ({ id: productId }) => productId !== id),
        ]}
        variant="section-related"
      />
    </Fragment>
  ) : null;
}

const mapStateToProps = state => ({
  products: state.products,
});

export default connect(mapStateToProps)(ProductDetailsContainer);
