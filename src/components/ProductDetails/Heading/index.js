import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import { Link, useParams } from 'react-router-dom';

Heading.propTypes = {
  category: PropTypes.string,
};

Heading.defaultProps = {
  category: '',
};
export default function Heading({ category }) {
  const params = useParams();
  const { title } = params;
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
              <span className="angle-right">&#8250;</span>
            </li>
            <li className="breadcrumb__item">
              <Link
                to={`/product-category/${_.kebabCase(category)}`}
                className="breadcrumb__link"
              >
                {category}
              </Link>
            </li>
            <li className="breadcrumb__item">
              <span className="angle-right">&#8250;</span>
              <span>
                {_.startCase(
                  title
                    .split('-')
                    .slice(0, 5)
                    .join(' '),
                ) + (title.split('-').length > 5 ? '...' : '')}
              </span>
            </li>
          </ol>
        </nav>
      </div>
    </section>
  );
}
