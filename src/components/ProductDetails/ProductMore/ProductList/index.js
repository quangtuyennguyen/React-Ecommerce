import PropTypes from 'prop-types';
import React from 'react';
import CarouselProvider from '../../../../commons/CarouselProvider';
import { responsiveSettings } from '../../../../constants/carousel';

ProductList.propTypes = {
  children: PropTypes.array,
  variant: PropTypes.string,
};

ProductList.defaultProps = {
  variant: '',
  children: [],
};

export default function ProductList({ children, variant }) {
  return (
    <div className={`row ${variant ? variant : ''}`}>
      <CarouselProvider settings={responsiveSettings}>
        {children}
      </CarouselProvider>
    </div>
  );
}
