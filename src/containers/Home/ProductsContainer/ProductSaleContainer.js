import _ from 'lodash';
import React, { useState } from 'react';

import { ProductItem } from '../../../components/Products/ProductsSale/ProductItem/ProductItem';
import { ProductList } from '../../../components/Products/ProductsSale/ProductList/ProductList';
import { renderProducts } from '../../../utils';

export const ProductSaleContainer = ({ products }) => {
    const [currentTab, setCurrentTab] = useState({ tab: '16%', tabIndex: 0 });
    const { tab, tabIndex } = currentTab;

    const changeTab = (tab, index) => setCurrentTab({tab, tabIndex: index});

    const filterProducts = () => (
        _.filter(products, ({ sale }) => (
            sale === tab
        ))
    );

    return (
        <ProductList tabIndex={tabIndex} changeTab={changeTab}>
            {renderProducts(filterProducts().slice(0, 3), ProductItem)}
        </ProductList>
    );
};
