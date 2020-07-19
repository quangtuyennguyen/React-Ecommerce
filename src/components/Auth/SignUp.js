import { Field, Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import Loading from '../../assets/images/loading-auth.gif';
import { auth, generateUserDocument } from '../../services/firebase';
import useEscKeydown from '../../utils/useEscKeydown';
import SignIn from './SignIn';

SignUp.propTypes = {
  hideModal: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired,
};

function SignUp({ hideModal, showModal }) {
  const [type, setType] = useState(true);
  const [loading, showLoading] = useState(false);
  const [errEmail, setErrEmail] = useState('');

  const SignupSchema = Yup.object().shape({
    displayName: Yup.string()
      .required('User name is required')
      .typeError('User name need a string')
      .min(6, 'Too Short!')
      .max(40, 'Too Long!'),
    email: Yup.string()
      .email('Email must be a valid email')
      .required('Email is required'),
    password: Yup.string()
      .required('Password is required')
      .min(8, 'Password must contain at least 8 character'),
  });

  const handleSubmitSignup = async userInfo => {
    const { email, password, displayName } = userInfo;
    try {
      const { user: userResponse } = await auth.createUserWithEmailAndPassword(
        email,
        password,
      );
      showLoading(true);
      generateUserDocument({ ...userResponse, displayName });
      toast.success('You have signed up successfully');
    } catch (error) {
      console.log(error);
      if (error.code.includes('already')) {
        setErrEmail('Email address already exists');
        setTimeout(() => {
          setErrEmail('');
        }, 3000);
      }
    }
  };

  useEscKeydown(() => {
    hideModal();
  });
  return (
    <div className="modal modal-auth">
      <div className="modal-auth__content">
        <div className="modal-auth__heading">
          <ul className="modal-auth__list">
            <li
              onClick={() => showModal(<SignIn />)}
              className="modal-auth__item"
            >
              <i className="fas fa-lock" />
              Sign in
            </li>
            <li className="modal-auth__item  modal-auth__item--active">
              <i className="far fa-user" />
              Sign up
            </li>
          </ul>
          <span onClick={hideModal} className="modal__hide">
            ×
          </span>
        </div>
        <div className="modal-auth__form">
          <Formik
            initialValues={{ displayName: '', email: '', password: '' }}
            validationSchema={SignupSchema}
            onSubmit={handleSubmitSignup}
          >
            {({ handleSubmit, errors, touched }) => (
              <Form className="form" onSubmit={handleSubmit} autoComplete="off">
                <div className="form__group">
                  <label htmlFor="displayName">Username</label>
                  <Field name="displayName">
                    {({ field }) => (
                      <input
                        className="form__input"
                        id="displayName"
                        type="text"
                        placeholder="Your username"
                        {...field}
                      />
                    )}
                  </Field>
                  {touched.displayName && errors.displayName && (
                    <span
                      style={{ marginTop: '1rem' }}
                      className="form__text-error"
                    >
                      {errors.displayName}
                    </span>
                  )}
                </div>
                <div className="form__group">
                  <label htmlFor="email">Email address</label>
                  <Field name="email">
                    {({ field }) => (
                      <input
                        className="form__input"
                        id="email"
                        type="email"
                        placeholder="Your email"
                        {...field}
                      />
                    )}
                  </Field>
                  {((touched.email && errors.email) || errEmail) && (
                    <span
                      style={{ marginTop: '1rem' }}
                      className="form__text-error"
                    >
                      {errors.email || errEmail}
                    </span>
                  )}
                </div>
                <div className="form__group">
                  <label htmlFor="password">Password</label>
                  <Field name="password">
                    {({ field }) => (
                      <input
                        className="form__input"
                        id="password"
                        type={`${type ? 'password' : 'text'}`}
                        placeholder="Your password"
                        {...field}
                      />
                    )}
                  </Field>
                  {touched.password && errors.password && (
                    <span
                      style={{ marginTop: '1rem' }}
                      className="form__text-error"
                    >
                      {errors.password}
                    </span>
                  )}
                  <i onClick={() => setType(!type)} className="far fa-eye" />
                </div>
                <button
                  type="submit"
                  className="btn modal-auth__btn btn--secondary"
                >
                  Sign up
                  {loading && <img src={Loading} alt="" />}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
export default SignUp;
