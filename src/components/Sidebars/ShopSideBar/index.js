import classnames from 'classnames';
import _ from 'lodash';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as actions from '../../../actions';
import { CATEGORIES } from '../../../constants';
import RangeSlider from './RangeSlider';

SideBar.propTypes = {
  products: PropTypes.array,
  rangeValue: PropTypes.object,
  filterByRange: PropTypes.func.isRequired,
  filterBySize: PropTypes.func.isRequired,
  range: PropTypes.object,
  setRange: PropTypes.func.isRequired,
  filterByRating: PropTypes.func.isRequired,
  sizeValue: PropTypes.array,
  category: PropTypes.string,
  ratingValue: PropTypes.number,
};

SideBar.defaultProps = {
  products: [],
  rangeValue: {},
  range: {},
  sizeValue: [],
  category: '',
  ratingValue: 0,
};

function SideBar({
  products,
  rangeValue,
  filterByRange,
  filterBySize,
  range,
  setRange,
  filterByRating,
  sizeValue,
  category: categoryProduct,
  ratingValue,
}) {
  const [categoryMore, setCategory] = useState(true);
  const [sizeMore, setSize] = useState(true);
  const totalProduct = products.length;

  const renderCategoryQuantity = value =>
    _.filter(products, ({ category }) => category === value).length;
  const renderSizeQuantity = size =>
    _.filter(products, ({ sizes }) => sizes && sizes.indexOf(size) !== -1)
      .length;

  const renderCategories = () =>
    _.map(CATEGORIES, ({ category }, index) => {
      if (index > 4 && categoryMore) {
        return null;
      } else {
        return (
          <li key={category} className="shopsidebar__item">
            <Link
              className={classnames('shopsidebar__link', {
                'shopsidebar__link--active':
                  categoryProduct === _.kebabCase(category),
              })}
              to={`/product-category/${_.kebabCase(category)}`}
            >
              {category}
              <span className="shopsidebar__quantity">
                {renderCategoryQuantity(category)}
              </span>
            </Link>
          </li>
        );
      }
    });

  const renderRatings = () =>
    _.map([5, 4, 3, 2, 1], item => (
      <div key={item} className="shopsidebar__rating-item">
        <input
          readOnly
          checked={ratingValue === item ? true : false}
          className="shopsidebar__radio"
          type="radio"
          name="rating"
          id={`_${item}rating`}
        />
        <label
          onClick={() => filterByRating(item)}
          htmlFor={`_${item}rating`}
          className="check-label"
        >
          <div className="shopsidebar__rating">
            {_.map([0, 1, 2, 3, 4], star => (
              <i
                key={star}
                className={`${star >= item ? 'far' : 'fas'} fa-star`}
              />
            ))}
          </div>
          <span className="shopsidebar__rating-text">
            {`${item < 5 ? 'bigger' : ''} ${item} ${
              item > 1 ? 'stars' : 'star'
            }`}
          </span>
        </label>
      </div>
    ));

  // search sizes
  const [value, setValue] = useState('');
  const [search, setSearch] = useState('');
  let sizes = ['XS', 'S', 'M', 'L', 'XL', '39', '40', '41', '42'];

  if (search) {
    sizes = _.filter(
      sizes,
      size => size.toLowerCase().indexOf(search.toLowerCase().trim()) !== -1,
    );
  }

  const handleChange = event => {
    const { value } = event.target;
    setValue(value);
    if (event.keyCode === 13) {
      setSearch(value);
    }
  };

  const handleSearch = event => {
    event.preventDefault();
    setSearch(value);
  };

  const renderSizes = () =>
    _.map(sizes, (size, index) => {
      if (index > 4 && sizeMore) {
        return null;
      } else {
        return (
          <li key={size} className="filter__item u-d-flex-center">
            <div className="filter__control">
              <input
                readOnly
                className="checkbox"
                checked={sizeValue.includes(size) ? true : false}
                type="checkbox"
                name="filter"
                id={size}
              />
              <label
                onClick={() => filterBySize(size)}
                className="check-label"
                htmlFor={size}
              >
                {size}
              </label>
            </div>
            <span className="filter__amount">{renderSizeQuantity(size)}</span>
          </li>
        );
      }
    });

  return (
    <div className="shopsidebar shopsidebar--filter">
      <div className="shopsidebar__category">
        <h5 className="shopsidebar__heading">Categories</h5>
        <ul className="shopsidebar__list">
          <Link to="/shop" className="shopsidebar__link">
            All
            <span className="shopsidebar__quantity">{totalProduct}</span>
          </Link>
          {renderCategories()}
          <span
            className="show-more"
            onClick={() => setCategory(!categoryMore)}
          >
            {categoryMore ? 'Show more' : 'Show less'}
          </span>
        </ul>
      </div>
      <div className="shopsidebar__price" style={{ border: 0 }}>
        <h5
          className="shopsidebar__heading"
          style={{ paddingBottom: '3.6rem' }}
        >
          Price
        </h5>
        <RangeSlider
          range={range}
          setRange={setRange}
          rangeValue={rangeValue}
          filterByRange={filterByRange}
        />
      </div>
      <div className="shopsidebar__rating">
        <h5 className="shopsidebar__heading">Evaluates</h5>
        {renderRatings()}
      </div>
      <div className="shopsidebar__size">
        <h5 className="shopsidebar__heading">Sizes</h5>
        <form onSubmit={handleSearch} className="form">
          <input
            onKeyUp={handleChange}
            type="text"
            className="form__input"
            name="size"
            id="size"
            placeholder="Search"
            autoComplete="off"
          />
          <button type="submit" className="fa fa-search" />
        </form>
        <div className="filter filter--brand">
          {renderSizes()}
          {sizes.length > 5 && (
            <span className="show-more" onClick={() => setSize(!sizeMore)}>
              {sizeMore ? 'Show more' : 'Show less'}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  rangeValue: state.rangeValue,
  products: state.products,
  sizeValue: state.sizeValue,
  ratingValue: state.ratingValue,
});

export default connect(mapStateToProps, actions)(SideBar);
