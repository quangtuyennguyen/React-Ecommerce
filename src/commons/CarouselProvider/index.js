import PropTypes from 'prop-types';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
// Import css files
import 'slick-carousel/slick/slick.css';

CarouselProvider.propTypes = {
  children: PropTypes.array,
  settings: PropTypes.object,
};

CarouselProvider.defaultProps = {
  settings: {},
  children: [],
};

export default function CarouselProvider({ children, settings }) {
  return <Slider {...settings}>{children}</Slider>;
}
