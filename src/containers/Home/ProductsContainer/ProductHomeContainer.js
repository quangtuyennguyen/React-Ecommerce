import _ from 'lodash';
import React from 'react';

import ProductItem from '../../../components/Products/ProductsHome/ProductItem';
import ProductList from '../../../components/Products/ProductsHome/ProductList';
import { CATEGORY_LISTS } from '../../../constants';
import { renderProducts } from '../../../utils';

export default function ProductHomeContainer({ products }) {
  const filterProducts = value =>
    _.filter(products, ({ category }) => value === category);

  const renderProductList = () =>
    _.map(CATEGORY_LISTS, ({ id, section, category, links, images }) => (
      <ProductList
        key={id}
        section={section}
        category={category}
        links={links}
        images={images}
        id={id}
      >
        {renderProducts(filterProducts(category).slice(0, 8), ProductItem)}
      </ProductList>
    ));
  return renderProductList();
}
