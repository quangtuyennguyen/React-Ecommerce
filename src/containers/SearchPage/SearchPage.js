import React from 'react';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { searchProduct } from '../../utils';
import Shop from '../Shop/Shop';

const SearchPage = ({ products }) => {
    const { search } = useLocation();
    const value = search.split('=').pop();
    const productsBySearch = searchProduct(products, value);
    return <Shop productsBySearch={productsBySearch} />
};
const mapStateToProps = state => ({
    products: state.products
});

export default connect(mapStateToProps)(SearchPage);