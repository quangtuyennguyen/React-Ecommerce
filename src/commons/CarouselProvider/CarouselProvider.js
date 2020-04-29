import PropTypes from 'prop-types';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
// Import css files
import 'slick-carousel/slick/slick.css';

CarouselProvider.propTypes = {
  children: PropTypes.element.isRequired,
  settings: PropTypes.object,
};

CarouselProvider.defaultProps = {
  settings: {},
};

export const CarouselProvider = ({ children, settings }) => {
  return <Slider {...settings}>{children}</Slider>;
};
