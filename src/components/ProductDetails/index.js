import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import Heading from './Heading';
import TabContent from './TabContent';

ProductDetails.propTypes = {
  children: PropTypes.element.isRequired,
  category: PropTypes.string,
};

ProductDetails.defaultProps = {
  category: '',
};

export default function ProductDetails({ children, category }) {
  return (
    <Fragment>
      <Heading category={category} />
      <section id="section-product-details">{children}</section>
      <TabContent />
    </Fragment>
  );
}
