import React from 'react';

import ProductList from '../../../components/Products/ProductsShop/ProductList/ProductList';
import ProductItem from '../../../components/Products/ProductsShop/ProductItem/ProductItemHorizontal';
import { renderProducts } from '../../../utils';

export const ShopList = ({ products, value, setValue, name }) => {
    return (
        <ProductList
            productPerRow={1}
            products={products}
            value={value}
            name={name}
            setValue={setValue}
            variant="section-products section-products--list">
            {renderProducts(products, ProductItem)}
        </ProductList>
    );
};

export default ShopList;