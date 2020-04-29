import _ from 'lodash';
import React from 'react';

import { ProductItem } from '../../../components/Products/ProductsHome/ProductItem/ProductItem';
import { ProductList } from '../../../components/Products/ProductsHome/ProductList/ProductList';
import { CATEGORY_LISTS } from '../../../constants/index';
import { renderProducts } from '../../../utils';

export const ProductHomeContainer = ({ products }) => {
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
};
