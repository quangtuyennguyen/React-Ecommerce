import React from 'react';
import { renderProducts } from '../../../utils';
import ProductItem from '../../../components/Products/ProductsShop/ProductItem/ProductItemVertical';
import { ProductList } from '../../../components/ProductDetails/ProductMore/ProductList/ProductList';

export const ProductRelated = ({ otherProducts, variant }) => {
    return (
        <section id={variant}>
            <div className="row" style={{ marginBottom: "2rem" }}>
                <h2 className="heading-title--main--medium u-center-text u-margin-top-big">Related products</h2>
            </div>
            <ProductList variant="u-margin-bottom-big">
                {renderProducts(otherProducts, ProductItem)}
            </ProductList>
        </section>
    );
};
