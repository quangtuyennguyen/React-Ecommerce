import _ from 'lodash';
import React, { Fragment } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

import PropTypes from 'prop-types';

BreadCrumb.propTypes = {
  currentPage: PropTypes.string,
  pageVariant: PropTypes.string,
};

BreadCrumb.defaultProps = {
  currentPage: '',
  pageVariant: '',
};

export default function BreadCrumb({ currentPage, pageVariant }) {
  const { pathname } = useLocation();
  const { title } = useParams();

  const renderLinks = () => {
    if (currentPage === 'Post Details') {
      return (
        <Fragment>
          <li className="breadcrumb__item">
            <i className="fas fa-chevron-right" />
            <Link to="/blog" className="breadcrumb__current-page">
              Blog
            </Link>
          </li>
          <li className="breadcrumb__item">
            <i className="fas fa-chevron-right" />
            {_.startCase(
              title
                .split('-')
                .slice(0, 8)
                .join(' '),
            ) + (title.split('-').length > 8 ? '...' : '')}
          </li>
        </Fragment>
      );
    } else {
      return (
        <li className="breadcrumb__item">
          <i className="fas fa-chevron-right" />
          <span className="breadcrumb__current-page">
            {pageVariant ? pageVariant : _.startCase(pathname)}
          </span>
        </li>
      );
    }
  };

  return (
    <section id="section-heading">
      <div className="row">
        <nav className="box-breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb__item">
              <i className="fas fa-home" />
              <Link to="/" className="breadcrumb__link">
                Home
              </Link>
            </li>
            {renderLinks()}
          </ol>
        </nav>
      </div>
    </section>
  );
}
