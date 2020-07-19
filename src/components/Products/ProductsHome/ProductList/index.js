import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import slug from 'slug';

import CarouselProvider from '../../../../commons/CarouselProvider';
import { oneSidePerRowSettings } from '../../../../constants/carousel';

ProductList.propTypes = {
  id: PropTypes.number,
  children: PropTypes.array,
  section: PropTypes.string,
  images: PropTypes.array,
  links: PropTypes.array,
  category: PropTypes.string,
};

ProductList.defaultProps = {
  id: 0,
  section: '',
  images: [],
  links: [],
  category: '',
  children: [],
};

export default function ProductList({
  id,
  children,
  section,
  images,
  links,
  category,
}) {
  const productPerRow = 4;
  const rows = children.length / productPerRow;
  const renderProducts = () => {
    const result = [];
    for (let i = 0; i < rows; i++) {
      result.push(
        <div key={i} className="row-fluid">
          {children.slice(productPerRow * i, productPerRow * i + productPerRow)}
        </div>,
      );
    }
    return result;
  };

  const renderLinks = () =>
    _.map(links, link => (
      <li key={link} className="product__list-item">
        <Link
          to={`/product-category/${slug(link.toLowerCase())}`}
          className="product__list-link"
        >
          {link}
        </Link>
      </li>
    ));

  const renderCarousel = () =>
    _.map(images, ({ title, image }) => (
      <div key={image} className="item">
        <img src={image} alt={title} />
      </div>
    ));

  return (
    <section id={section}>
      <div
        className={`row u-margin-top-${
          section === 'section-women' ? 'big' : 'medium'
        } u-margin-bottom-medium u-border-big`}
      >
        <div className="col span_2_of_5 u-md-width-full">
          <div style={{ height: '100%' }} className="row-fluid md-d-flex">
            <div className="col span_2_of_5">
              <div className={`box-product box-product--${id} u-center-text`}>
                <h3 className="box-product__title">{category}</h3>
                <ul className="products-list">{renderLinks()}</ul>
              </div>
            </div>
            <div style={{ height: '100%' }} className="col span_3_of_5">
              <div
                style={{ height: '100%' }}
                className="product-carousel"
                id="product-carousel"
              >
                <CarouselProvider
                  settings={{
                    ...oneSidePerRowSettings,
                    arrows: false,
                    className: 'box-carousel',
                  }}
                >
                  {renderCarousel()}
                </CarouselProvider>
              </div>
            </div>
          </div>
        </div>
        <div className="col span_3_of_5 u-md-width-full">
          {renderProducts()}
        </div>
      </div>
    </section>
  );
}
