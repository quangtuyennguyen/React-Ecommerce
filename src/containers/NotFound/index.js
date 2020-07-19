import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../../components/BreadCrumb';

export default function NotFound() {
  useEffect(() => {
    document.title = '404 Not Found - Shopping';
  }, []);

  return (
    <Fragment>
      <BreadCrumb pageVariant="404 Not Found" />
      <div className="row">
        <div className="not-found">
          <span className="not-found__text">404</span>
          <h3 className="heading-title--main--medium">
            Oops... Page Not Found!
          </h3>
          <p className="not-found__desc">
            Try using the button below to go to main page of the site
          </p>
          <Link to="/" className="btn btn--secondary">
            <i className="fas fa-arrow-circle-left" />
            Go to home
          </Link>
        </div>
      </div>
    </Fragment>
  );
}
