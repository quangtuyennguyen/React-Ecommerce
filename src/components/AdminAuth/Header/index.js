import React from 'react';
import { Link } from 'react-router-dom';

function AdminAuthHeader() {
  return (
    <div className="admin-auth-header">
      <div className="admin-auth-header__bg" />
      <div className="admin-auth-header__box-logo">
        <Link to="/">
          <img
            src="https://res.cloudinary.com/shopping-assets/image/upload/v1588046670/2020-04-28_110348_qckdgu.png"
            alt="Admin auth header logo"
          />
        </Link>
        <h6 className="admin-auth-header__text">Use react-redux-firebase</h6>
      </div>
    </div>
  );
}

export default AdminAuthHeader;
