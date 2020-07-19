import _ from 'lodash';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import BreadCrumb from '../../components/BreadCrumb';
import CartSideBar from '../../components/Sidebars/CartSideBar';
import WishItem from '../../components/WishItem';
import WishList from '../../components/WishList';
import { TIMER_VALUES } from '../../constants';

WishListContainer.propTypes = {
  wishLists: PropTypes.array,
  removeToWishList: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
  toggleLoading: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired,
};

WishListContainer.defaultProps = {
  wishLists: [],
};

function WishListContainer({
  wishLists,
  removeToWishList,
  addToCart,
  toggleLoading,
  showModal,
}) {
  const wishListsTotal = wishLists.length;
  const renderWishItem = () =>
    _.map(wishLists, ({ id, price, title, images, category }) => (
      <WishItem
        key={id}
        id={id}
        title={title}
        price={price}
        images={images}
        category={category}
        handleAddToCart={handleAddToCart}
        handleRemoveToWishList={handleRemoveToWishList}
      />
    ));

  const handleRemoveToWishList = id => {
    toggleLoading(TIMER_VALUES.main, () => {
      removeToWishList(id);
    });
  };

  const handleAddToCart = product => {
    toggleLoading(TIMER_VALUES.main, () => {
      addToCart(product);
      showModal(<CartSideBar />);
    });
  };

  return (
    <Fragment>
      <BreadCrumb />
      <WishList wishListsTotal={wishListsTotal}>{renderWishItem()}</WishList>
    </Fragment>
  );
}

const mapStateToProps = state => ({
  wishLists: state.wishLists,
});

export default connect(mapStateToProps, actions)(WishListContainer);
