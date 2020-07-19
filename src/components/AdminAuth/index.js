import { Field, Form, Formik } from 'formik';
import md5 from 'md5';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { TIMER_VALUES } from '../../constants';
import { adminAccRef } from '../../services/firebase';
import { findAccount } from '../../utils';

import './style.css';

AdminAuth.propTypes = {
  adminAuth: PropTypes.func.isRequired,
  toggleLoading: PropTypes.func.isRequired,
};

function AdminAuth({ adminAuth: adminAuthAction, toggleLoading }) {
  const [account, setAccount] = useState([]);

  const history = useHistory();

  const validate = ({ email: emailCurrent, password: passwordCurrent }) => {
    const { email, password } = findAccount(account, emailCurrent) || {};
    const errors = {};
    if (!emailCurrent) {
      errors.email = 'Email is required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(emailCurrent)
    ) {
      errors.email = 'Email must be a valid email';
    } else if (!email) {
      errors.email = 'Email does not exits';
    }
    if (!passwordCurrent) {
      errors.password = 'Password is required';
    } else if (!errors.email && md5(passwordCurrent) !== password) {
      errors.password = 'Password You Entered is Incorrect. Please try again.';
    }
    return errors;
  };

  useEffect(() => {
    adminAccRef.on('value', snapshot => {
      const initialData = snapshot.val();
      const newData = Object.values(initialData || []);
      setAccount(newData);
    });
  }, []);

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={() => {
        adminAuthAction(true);
        toggleLoading(TIMER_VALUES.sub, () => {
          localStorage.setItem('isAdminAuth', true);
          history.push('/admin');
        });
      }}
      validate={validate}
    >
      {({ handleSubmit, errors, touched }) => (
        <Form
          className="form form-admin-auth"
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <label htmlFor="email">Email</label>
          <Field name="email">
            {({ field }) => (
              <input
                id="email"
                className="form__input"
                type="text"
                placeholder="Your email"
                {...field}
              />
            )}
          </Field>
          {touched.email && errors.email && (
            <span className="form__text-error">{errors.email}</span>
          )}
          <label htmlFor="password">Password</label>
          <Field name="password">
            {({ field }) => (
              <input
                id="password"
                className="form__input"
                type="password"
                placeholder="Your password"
                {...field}
              />
            )}
          </Field>
          {touched.password && errors.password && (
            <span className="form__text-error">{errors.password}</span>
          )}
          <button type="submit" className="btn btn--secondary">
            Sign in
          </button>
          <div className="btn-text-box">
            <Link to="/" className="btn btn--text">
              &#8592; Back to homepage
            </Link>
          </div>
        </Form>
      )}
    </Formik>
  );
}
export default AdminAuth;
