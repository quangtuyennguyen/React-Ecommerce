import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { renderProducts, searchProduct } from '../../utils';
import SearchItem from '../SearchItem';

SearchList.propTypes = {
  products: PropTypes.array,
  searchValue: PropTypes.string,
  searchBoxRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any }),
  ]),
};

SearchList.defaultProps = {
  products: [],
  searchValue: '',
};

function SearchList({ products, searchValue, searchBoxRef }) {
  const [value, setValue] = useState(9);
  const resultProduct = renderProducts(
    searchProduct(products, searchValue).slice(0, value),
    SearchItem,
  );

  useEffect(() => {
    if (window.innerWidth <= 1360 && window.innerWidth > 600) {
      setValue(8);
    } else if (window.innerWidth <= 600) {
      setValue(4);
    }
  }, []);
  return (
    <div ref={searchBoxRef} className="wrapper-result">
      <ul className="search-result__list">{resultProduct}</ul>
      {resultProduct.length >= value ? (
        <div className="search-result__view-more">
          <a
            href={`/search?keyword=${searchValue}`}
            className="btn btn--outline"
          >
            View More
          </a>
        </div>
      ) : null}
    </div>
  );
}

const mapStateToProps = state => ({
  products: state.products,
});

export default connect(mapStateToProps)(SearchList);
