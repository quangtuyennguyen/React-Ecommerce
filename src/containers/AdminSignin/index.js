import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import { adminAuth, toggleLoading } from '../../actions';
import AdminAuth from '../../components/AdminAuth';
import AdminAuthHeader from '../../components/AdminAuth/Header';

AdminSignin.propTypes = {
  adminAuth: PropTypes.bool,
  toggleLoading: PropTypes.func.isRequired,
};

AdminSignin.defaultProps = {
  adminAuth: false,
};

function AdminSignin({ adminAuth, toggleLoading }) {
  return (
    <Fragment>
      <AdminAuthHeader />
      <AdminAuth adminAuth={adminAuth} toggleLoading={toggleLoading} />
    </Fragment>
  );
}
export default connect(null, { adminAuth, toggleLoading })(AdminSignin);
