import React from 'react';

import { renderProducts } from '../../../utils';
import ProductItem from '../../../components/Products/ProductsShop/ProductItem/ProductItemVertical';
import { ProductList } from '../../../components/ProductDetails/ProductMore/ProductList/ProductList';

export const ProductsOther = ({ products, sectionId, heading }) => {
    return (
        <section id={sectionId}>
            <div className="row">
                <h2 className="heading-title--main--medium u-center-text u-margin-top-big">{heading}</h2>
            </div>
            <ProductList>
                {renderProducts(products, ProductItem)}
            </ProductList>
        </section>
    );
};
