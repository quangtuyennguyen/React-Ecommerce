import { Field, Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import { hideModal, showModal } from '../../actions';
import Loading from '../../assets/images/loading-auth.gif';
import { auth, signInWithGoggle } from '../../services/firebase';
import useEscKeydown from '../../utils/useEscKeydown';
import ResetPassword from './ResetPassword';
import SignUp from './SignUp';

SignIn.propTypes = {
  hideModal: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired,
};

function SignIn({ hideModal, showModal }) {
  const inputRef = useRef();
  const [type, setType] = useState(true);
  const [loading, showLoading] = useState(false);
  const [authError, setAuthError] = useState({
    errEmail: '',
    errPassword: '',
  });

  const handleResetPassword = () => {
    showModal(<ResetPassword hideModal={hideModal} showModal={showModal} />);
  };

  const { errEmail, errPassword } = authError;
  const SigninSchema = Yup.object().shape({
    email: Yup.string()
      .email('Email must be a valid email')
      .required('Email is required'),
    password: Yup.string()
      .required('Password is required')
      .min(8, 'Password must contain at least 8 character'),
  });

  const handleSubmitSignin = async values => {
    const { email, password } = values;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      toast.success('You have successfully signed in');
      showLoading(true);
    } catch (error) {
      if (error.code.includes('user')) {
        setAuthError({
          errEmail: "Account doesn't exist, Please try again.",
          errPassword: '',
        });
      } else if (error.code.includes('password')) {
        setAuthError({
          errEmail: '',
          errPassword: 'Password You Entered is Incorrect. Please try again.',
        });
      } else if (error.code.includes('too-many-requests')) {
        setAuthError({
          errEmail: '',
          errPassword: 'Too many requests, try again later.',
        });
      }
      setTimeout(() => {
        setAuthError({});
      }, 3000);
    }
  };

  useEscKeydown(() => {
    hideModal();
  });

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="modal modal-auth">
      <div className="modal-auth__content">
        <div className="modal-auth__heading">
          <ul className="modal-auth__list">
            <li className="modal-auth__item modal-auth__item--active">
              <i className="fas fa-lock" />
              Sign in
            </li>
            <li
              onClick={() =>
                showModal(
                  <SignUp hideModal={hideModal} showModal={showModal} />,
                )
              }
              className="modal-auth__item"
            >
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
            initialValues={{
              email: '',
              password: '',
            }}
            validationSchema={SigninSchema}
            onSubmit={handleSubmitSignin}
          >
            {({ handleSubmit, errors, touched }) => (
              <Form className="form" onSubmit={handleSubmit} autoComplete="off">
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
                        ref={inputRef}
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
                  {((touched.password && errors.password) || errPassword) && (
                    <span
                      style={{ marginTop: '1rem' }}
                      className="form__text-error"
                    >
                      {errors.password || errPassword}
                    </span>
                  )}
                  <i onClick={() => setType(!type)} className="far fa-eye" />
                </div>
                <div className="form__group u-d-flex-center">
                  <div className="form__text form__text--left">
                    <input
                      className="checkbox"
                      type="checkbox"
                      name="checkbox"
                      id="remember"
                    />
                    <label className="check-label" htmlFor="remember">
                      Remember me
                    </label>
                  </div>
                  <div className="form__text form__text--right">
                    <span onClick={handleResetPassword}>Forgot password?</span>
                  </div>
                </div>
                <div className="btn-group u-d-flex-center-left">
                  <button
                    type="submit"
                    className="btn modal-auth__btn btn--secondary"
                  >
                    Sign in
                    {loading && <img src={Loading} alt="" />}
                  </button>
                  <button
                    type="button"
                    onClick={signInWithGoggle}
                    className="btn modal-auth__btn btn--white"
                  >
                    Google
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default connect(null, { hideModal, showModal })(SignIn);
