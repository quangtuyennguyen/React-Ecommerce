import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { Heading } from './Heading/Heading';
import TabContent from './TabContent/TabContent';

ProductDetails.propTypes = {
  children: PropTypes.element.isRequired,
  category: PropTypes.string,
};

ProductDetails.defaultProps = {
  category: '',
};

export const ProductDetails = ({ children, category }) => (
  <Fragment>
    <Heading category={category} />
    <section id="section-product-details">{children}</section>
    <TabContent />
  </Fragment>
);
