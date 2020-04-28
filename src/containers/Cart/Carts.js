import _ from 'lodash';
import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { BreadCrumb } from '../../components/BreadCrumb/BreadCrumb';
import { CartItem } from '../../components/CartItem/CartItem';
import { CartList } from '../../components/CartList/CartList';
import { TIMER_VALUES } from '../../constants';
import { useState } from 'react';



const Carts = ({
    carts, updateCart, toggleLoading,
    deleteToCart, changeProductQuantity
}) => {
    const [isDisable, setIsdisale] = useState(true);
    const cartTotal = carts.length;
    const handleUpdateCart = () => {
        toggleLoading(TIMER_VALUES.main, () => {
            updateCart();
            setIsdisale(true);
        });
    };

    const handleDeleteToCart = id => {
        toggleLoading(TIMER_VALUES.main, () => {
            deleteToCart(id);
        });
    };

    const handleAddToCart = (id, value) => {
        changeProductQuantity(id, value);
        setIsdisale(false);
    };

    useEffect(() => {
        document.title = 'Cart - Shopping';
    }, []);


    const renderCarts = () => (
        _.map(carts, product => (
            <CartItem
                key={product.id}
                product={product}
                handleAddToCart={handleAddToCart}
                handleDeleteToCart={handleDeleteToCart}
            />
        ))
    );

    return (
        <Fragment>
            <BreadCrumb />
            <CartList
                isDisable={isDisable}
                cartTotal={cartTotal}
                handleUpdateCart={handleUpdateCart}>
                {renderCarts()}
            </CartList>
        </Fragment>
    );
};


const mapStateToProps = state => ({
    carts: state.carts,
});

export default connect(mapStateToProps, actions)(Carts);