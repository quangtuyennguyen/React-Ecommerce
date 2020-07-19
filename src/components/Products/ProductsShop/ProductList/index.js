import PropTypes from 'prop-types';
import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';

import SideBar from '../../../Sidebars/ShopSideBar';
import CurrentFilter from '../../../CurrentFilter';
import Pagination from '../../../Pagination';

ProductList.propTypes = {
  children: PropTypes.array,
  variant: PropTypes.string,
  name: PropTypes.string,
  productPerRow: PropTypes.number,
  category: PropTypes.string,
  rangeValue: PropTypes.object,
};

ProductList.defaultProps = {
  children: [],
  variant: '',
  name: '',
  productPerRow: 0,
  category: '',
  rangeValue: {},
};

function ProductList({
  children,
  variant,
  name,
  productPerRow,
  category,
  rangeValue,
}) {
  const [range, setRange] = useState(rangeValue);
  // render product per page
  const perPage = 9;
  const [currentPage, setCurrentPage] = useState(0);
  const total = Math.ceil(children.length / perPage);
  const start = perPage * currentPage;
  const end = perPage * currentPage + perPage;
  const productsCurrent = children.slice(start, end);

  // render product per row
  const rows = productsCurrent.length / productPerRow;

  const renderBanner = () => (
    <div className="row u-padding-horizontal banner u-d-flex-center">
      <div className="col span_1_of_2">
        <div className="banner__details">
          <span className="banner__heading banner__heading--sub">
            Converse All Star
          </span>
          <h4 className="banner__heading banner__heading--main">
            Make Your Day Comfortable
          </h4>
          <a href="/" className="btn btn--small btn--secondary">
            Show now
          </a>
        </div>
      </div>
      <div className="col span_1_of_2">
        <img
          src="https://demo.createx.studio/cartzilla/img/shop/catalog/banner.jpg"
          alt=""
          className="banner__img"
        />
      </div>
    </div>
  );

  const renderProducts = () => {
    const resultProducts = [];
    for (let i = 0; i < rows; i++) {
      if (name === 'Grid') {
        resultProducts.push(
          <Fragment key={i}>
            <div className="row u-padding-horizontal">
              {productsCurrent.slice(
                productPerRow * i,
                productPerRow * i + productPerRow,
              )}
            </div>
            {i === 1 ? renderBanner() : null}
          </Fragment>,
        );
      } else {
        resultProducts.push(
          <Fragment key={i}>
            <div className="row">{productsCurrent[i]}</div>
            {i === 2 ? renderBanner() : null}
          </Fragment>,
        );
      }
    }
    return resultProducts;
  };

  return (
    <section id="section-products" className={variant}>
      <div className="row">
        <div className="col span_1_of_3">
          <SideBar range={range} setRange={setRange} category={category} />
        </div>
        <div className="col span_2_of_3">
          <CurrentFilter range={range} setRange={setRange} />
          {renderProducts()}
          {children.length > 9 ? (
            <Pagination
              total={total}
              customClass="row u-padding-horizontal pagination"
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          ) : null}
        </div>
      </div>
    </section>
  );
}

const mapStateToProps = state => ({
  rangeValue: state.rangeValue,
});

export default connect(mapStateToProps)(ProductList);
