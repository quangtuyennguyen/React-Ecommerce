import _ from 'lodash';
import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import { BreadCrumb } from '../../components/BreadCrumb/BreadCrumb';
import { WishItem } from '../../components/WishItem/WishItem';
import { WishList } from '../../components/WishList/WishList';
import { TIMER_VALUES } from '../../constants';
import CartSideBar from '../../components/Sidebars/CartSideBar/CartSideBar';


const WishListContainer = ({
    wishLists, removeToWishList,
    addToCart, toggleLoading,
    showModal
}) => {
    const wishListsTotal = wishLists.length;
    const renderWishItem = () => (
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
        ))
    );

    const handleRemoveToWishList = id => {
        toggleLoading(TIMER_VALUES.main, () => {
            removeToWishList(id);
        });
    };

    const handleAddToCart = product => {
        toggleLoading(TIMER_VALUES.main, () => {
            addToCart(product);
            showModal(<CartSideBar />)
        });

    };

    return (
        <Fragment>
            <BreadCrumb />
            <WishList wishListsTotal={wishListsTotal}>
                {renderWishItem()}
            </WishList>
        </Fragment>
    );
};

const mapStateToProps = state => ({
    wishLists: state.wishLists
});

export default connect(mapStateToProps, actions)(WishListContainer);