import _ from 'lodash';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import ReactImageMagnify from 'react-image-magnify';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import slug from 'slug';

import * as actions from '../../actions';
import CarouselProvider from '../../commons/CarouselProvider';
import { TIMER_VALUES } from '../../constants';
import { oneSidePerRowSettings } from '../../constants/carousel';
import {
  filterProductComments,
  formatter,
  renderOptionSizes,
  renderRating,
} from '../../utils';
import useEscKeydown from '../../utils/useEscKeydown';
import CartSideBar from '../Sidebars/CartSideBar';

ProductView.propTypes = {
  isModal: PropTypes.bool,
  productCurrent: PropTypes.object,
  addToCart: PropTypes.func.isRequired,
  addToWishList: PropTypes.func.isRequired,
  hideModal: PropTypes.func.isRequired,
  toggleLoading: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired,
  comments: PropTypes.array,
};

ProductView.defaultProps = {
  productCurrent: {},
  comments: [],
  isModal: undefined,
};

function ProductView({
  isModal,
  productCurrent,
  addToCart,
  addToWishList,
  hideModal,
  toggleLoading,
  showModal,
  comments,
}) {
  const [state, setState] = useState({
    quantity: 1,
  });
  const { id, images, price, rating, sizes, title, category } = productCurrent;
  const totalComments = filterProductComments(comments, id).length;

  const handleChange = ({ target: { name, value } }) => {
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleAddToWishList = () => {
    toggleLoading(TIMER_VALUES.main, () => {
      addToWishList({ id, title, price, images, category });
    });
  };

  const handleAddToCart = () => {
    const { quantity } = state;
    if (isModal) hideModal();
    toggleLoading(TIMER_VALUES.main, () => {
      addToCart({ ...productCurrent, quantity: parseInt(quantity) });
      showModal(<CartSideBar />);
    });
  };

  const renderCarousel = () =>
    _.map(images, (img, index) => (
      <div key={img} className="item">
        <ReactImageMagnify
          imageClassName="image-slide"
          enlargedImageContainerClassName="image-slide--zoom"
          {...{
            smallImage: {
              alt: `Watch image ${index}`,
              src: img,
              width: window.innerWidth <= 600 ? null : 650,
              height: window.innerWidth <= 600 ? null : 550,
            },
            largeImage: {
              src: img,
              width: window.innerWidth <= 600 ? null : 1950,
              height: window.innerWidth <= 600 ? null : 1650,
            },
          }}
        />
      </div>
    ));

  useEscKeydown(
    hideModal
      ? () => {
          hideModal();
        }
      : false,
  );

  return (
    <div className="product-details">
      <div className="product-details__content">
        {isModal && (
          <div className="product-details__heading">
            <h5 className="product-details__title">
              <span>
                Sports Hooded Sweatshirt
                <i className="fas fa-chevron-right" />
              </span>
              <span onClick={hideModal} className="modal__hide">
                ×
              </span>
            </h5>
          </div>
        )}
        <div className="product-details__main">
          <div className="row">
            <div className="col span_3_of_5">
              <CarouselProvider
                settings={{
                  ...oneSidePerRowSettings,
                  arrows: false,
                  customPaging: i => <img src={images[i]} alt="" />,
                }}
              >
                {renderCarousel()}
              </CarouselProvider>
            </div>
            <div className="col span_2_of_5">
              <div className="product">
                <div className="product__details">
                  <h4 className="product__title product__title--big">
                    {title}
                  </h4>
                  <p className="product__category">
                    Category:
                    <Link
                      to={`/product-category/${_.kebabCase(category)}`}
                    >{` ${category}`}</Link>
                  </p>
                  <div className="product__heading">
                    <div className="product__rating">
                      {renderRating(rating)}
                      {totalComments ? (
                        <a
                          href={`/product/${slug(
                            title.toLowerCase(),
                          )}.${id}#section-wrapper-tabs`}
                        >
                          {totalComments} Reviews
                        </a>
                      ) : null}
                    </div>
                    <i onClick={handleAddToWishList} className="far fa-heart" />
                  </div>
                  <div className="product__box-price">
                    <span className="product__price product__price-p-new">
                      {formatter.format(price)}
                    </span>
                    <span className="product__price product__price--old">
                      <s>{formatter.format(Math.round(price * 1.2))}</s>
                    </span>
                    <span className="btn btn--small product__sale">Sale</span>
                  </div>
                  <div className="product__available">
                    <i className="fa fa-check-square" />
                    <span>Product available</span>
                  </div>
                  {['Women Clothing', 'Men Clothing'].includes(category) && (
                    <div className="product__size">
                      <div className="size">
                        <span className="size__title">Size</span>
                        <select
                          name="size"
                          onChange={handleChange}
                          className="select"
                        >
                          <option>Select size</option>
                          {renderOptionSizes(sizes)}
                        </select>
                      </div>
                    </div>
                  )}
                  <div className="product__quantity u-d-flex-center">
                    <div className="quantity">
                      <select
                        name="quantity"
                        onChange={handleChange}
                        className="select"
                      >
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                      </select>
                    </div>
                    <button
                      type="button"
                      onClick={handleAddToCart}
                      className="btn btn--small btn--outline"
                    >
                      <i className="fas fa-cart-plus" />
                      Add to cart
                    </button>
                  </div>
                </div>
                <div className="product__info">
                  <h5 className="product__info-title product__info-title--big">
                    <i className="fas fa-exclamation-circle" /> Product info
                  </h5>
                  <h6 className="product__info-title product__info-title--small">
                    {' '}
                    Style
                  </h6>
                  <ul className="product__info-list">
                    <li className="product__info-item">Hooded top</li>
                  </ul>
                  <h6 className="product__info-title product__info-title--small">
                    {' '}
                    Composition
                  </h6>
                  <ul className="product__info-list">
                    <li className="product__info-item">
                      Elastic rib: Cotton 95%, Elastane 5%
                    </li>
                    <li className="product__info-item">
                      Cotton 80%, Polyester 20%
                    </li>
                    <li className="product__info-item">Lining: Cotton 100%</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  comments: state.productComments,
});

export default connect(mapStateToProps, actions)(ProductView);
