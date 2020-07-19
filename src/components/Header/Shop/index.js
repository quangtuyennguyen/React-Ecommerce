import classnames from 'classnames';
import PropTypes from 'prop-types';
import _ from 'lodash';
import React, { useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { SORT_PRODUCT as SORTS } from '../../../constants';
import ShopGrid from '../../../containers/Shop/ShopGrid';
import ShopList from '../../../containers/Shop/ShopList';
import useEscKeydown from '../../../utils/useEscKeydown';
import useClickOutside from '../../../utils/useClickOutside';

ShopHeader.propTypes = {
  setLayout: PropTypes.func.isRequired,
  name: PropTypes.string,
  sortProducts: PropTypes.func.isRequired,
  totalProduct: PropTypes.number,
};

ShopHeader.defaultProps = {
  name: '',
  totalProduct: 0,
};

export default function ShopHeader({
  setLayout,
  name,
  sortProducts,
  totalProduct,
}) {
  const sortRef = useRef();
  const buttonRef = useRef();
  const { search } = useLocation();
  const [sortName, setSortName] = useState('Popularity');
  const [isOpen, setIsOpen] = useState(false);
  const value = search.split('=').pop();
  const handleSortProducts = (sort, name) => {
    sortProducts(sort);
    setSortName(name);
    setIsOpen(false);
  };

  const renderSort = () =>
    _.map(SORTS, ({ name, sort }) => (
      <button
        type="button"
        key={name}
        onClick={() => handleSortProducts(sort, name)}
        className={classnames('sort__btn', {
          'sort__btn--active': sortName === name,
        })}
      >
        {name}
      </button>
    ));

  useClickOutside(sortRef, buttonRef, () => setIsOpen(false)); // handle close click outside
  useEscKeydown(() => {
    // handle close press the key escape
    setIsOpen(false);
  });

  return (
    <section id="section-heading">
      <div className="row">
        <nav className="box-breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb__item">
              <Link to="/" className="breadcrumb__link">
                <i className="fas fa-home" />
                Home
              </Link>
            </li>
            <li className="breadcrumb__item">
              <Link to="/shop" className="breadcrumb__link">
                <span className="angle-right">&#8250;</span>
                Shop
              </Link>
            </li>
            <li className="breadcrumb__item">
              <span className="angle-right">&#8250;</span>
              <span>
                {`${
                  value
                    ? `Search results for “${value}”`
                    : name + ' left sidebar'
                }`}
              </span>
            </li>
          </ol>
        </nav>
      </div>
      <div className="row">
        <div className="col span_2_of_3">
          <div className="sort sort--secondary">
            <span className="sort__text">Sort by:</span>
            <div className="sort__wrap">
              <button
                type="button"
                ref={buttonRef}
                onClick={() => setIsOpen(!isOpen)}
                className="sort__heading"
              >
                {sortName}
              </button>
              {isOpen && (
                <div ref={sortRef} className="sort__box">
                  {renderSort()}
                </div>
              )}
            </div>
            <span className="sort__text">of {totalProduct} products</span>
          </div>
        </div>
        <div className="col span_1_of_3">
          <div className="select-layout">
            <i
              onClick={() =>
                setLayout({
                  MyComponent: ShopGrid,
                  name: 'Grid',
                })
              }
              className={classnames('fa fa-th-large', {
                active: name === 'Grid',
              })}
            />
            <i
              onClick={() =>
                setLayout({
                  MyComponent: ShopList,
                  name: 'List',
                })
              }
              className={classnames('fa fa-list-ul', {
                active: name === 'List',
              })}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
