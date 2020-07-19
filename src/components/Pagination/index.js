import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

Pagination.propTypes = {
  total: PropTypes.number.isRequired,
  currentPage: PropTypes.number,
  setCurrentPage: PropTypes.func.isRequired,
  customClass: PropTypes.string,
};

Pagination.defaultProps = {
  currentPage: 0,
  customClass: '',
};

export default function Pagination({
  total,
  currentPage,
  setCurrentPage,
  customClass,
}) {
  const renderPagination = () => {
    if (window.innerWidth >= 600) {
      const pagination = [];
      for (let i = 0; i < total; i++) {
        pagination.push(
          <li key={i} className="pagination__item">
            <button
              type="button"
              disabled={
                (currentPage === 0 && i === 0) ||
                (currentPage === total - 1 && i === total - 1)
              }
              onClick={() => setCurrentPage(i)}
              className={classnames('pagination__btn', {
                'pagination__btn--active': i === currentPage,
              })}
            >
              {i + 1}
            </button>
          </li>,
        );
      }
      return <ul className="pagination__list">{pagination}</ul>;
    } else {
      return (
        <div className="pagination__list">
          <span className="pagination__current">{`${currentPage + 1} /`}</span>
          <span style={{ paddingLeft: '0.4rem' }} className="pagination__total">
            {total}
          </span>
        </div>
      );
    }
  };

  return (
    <div className={customClass}>
      <div className="col span_1_of_3">
        <div className="pagination__control pagination__control--prev">
          <button
            type="button"
            disabled={currentPage === 0}
            onClick={() => setCurrentPage(--currentPage)}
            className="pagination__btn"
          >
            <i className="fas fa-chevron-left" />
            Prev
          </button>
        </div>
      </div>
      <div className="col span_1_of_3">{renderPagination()}</div>
      <div className="col span_1_of_3">
        <div className="pagination__control pagination__control--next">
          <button
            type="button"
            disabled={currentPage === total - 1}
            onClick={() => setCurrentPage(++currentPage)}
            className="pagination__btn"
          >
            Next
            <i className="fas fa-chevron-right" />
          </button>
        </div>
      </div>
    </div>
  );
}
