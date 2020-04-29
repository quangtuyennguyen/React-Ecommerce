import PropTypes from 'prop-types';
import React from 'react';
import { CarouselProvider } from '../../../../commons/CarouselProvider/CarouselProvider';
import { responsiveSettings } from '../../../../constants/carousel';

ProductList.propTypes = {
  children: PropTypes.element.isRequired,
  variant: PropTypes.string,
};

ProductList.defaultProps = {
  variant: '',
};

export const ProductList = ({ children, variant }) => {
  return (
    <div className={`row ${variant ? variant : ''}`}>
      <CarouselProvider settings={responsiveSettings}>
        {children}
      </CarouselProvider>
    </div>
  );
};
