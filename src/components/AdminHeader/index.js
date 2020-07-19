import classnames from 'classnames';
import _ from 'lodash';
import PropTypes from 'prop-types';

import React, { useEffect, useRef, useState } from 'react';
import { FILTER_BY_ICON } from '../../constants';

AdminHeader.propTypes = {
  hadleShowModal: PropTypes.func.isRequired,
  handleSearchProduct: PropTypes.func.isRequired,
  clearProductEdit: PropTypes.func.isRequired,
  categoryCurrent: PropTypes.string,
  handleFilterByCategory: PropTypes.func.isRequired,
};

AdminHeader.defaultProps = {
  categoryCurrent: '',
};

export default function AdminHeader({
  hadleShowModal,
  handleSearchProduct,
  clearProductEdit,
  categoryCurrent,
  handleFilterByCategory,
}) {
  const inputRef = useRef();
  const [search, setSearch] = useState('');
  const onAddProduct = () => {
    hadleShowModal();
    clearProductEdit({
      title: '',
      subTitle: '',
      price: '',
      rating: 1,
      images: [],
      discountEndTime: 0,
      sale: '',
      description: '',
      category: '',
      sizes: '',
    });
  };

  const onKeyUp = event => {
    const { value } = event.target;
    setSearch(value);
    if (event.keyCode === 13) {
      handleSearchProduct(value.trim());
    }
  };

  const onSubmit = () => {
    handleSearchProduct(search.trim());
  };

  const renderIconFilter = () =>
    _.map(FILTER_BY_ICON, ({ name, category }) => (
      <i
        key={name}
        onClick={() => handleFilterByCategory(category)}
        className={classnames(name, { active: category === categoryCurrent })}
      />
    ));

  const handelSubmit = event => {
    event.preventDefault();
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="row u-margin-bottom-medium">
      <div className="col span_1_of_4">
        <button
          type="button"
          onClick={onAddProduct}
          className="btn btn--secondary"
          style={{ margin: 0 }}
        >
          <i
            style={{ paddingRight: '0.7rem' }}
            className="far fa-plus-square"
          />
          Add product
        </button>
      </div>
      <div
        className="col span_1_of_4"
        style={{ float: 'right', marginLeft: 'auto' }}
      >
        <form className="form" onSubmit={handelSubmit}>
          <input
            ref={inputRef}
            onKeyUp={onKeyUp}
            className="form__input"
            type="text"
            name="q"
            placeholder="Search for products"
            autoComplete="off"
          />
          <i onClick={onSubmit} className="fas fa-search" />
        </form>
        <div className="sort sort-categrory">
          <div className="sort__icon">{renderIconFilter()}</div>
        </div>
      </div>
    </div>
  );
}
