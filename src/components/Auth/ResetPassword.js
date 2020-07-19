import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import { auth } from '../../services/firebase';
import useEscKeydown from '../../utils/useEscKeydown';
import SignIn from './SignIn';

ResetPassword.propTypes = {
  showModal: PropTypes.func.isRequired,
  hideModal: PropTypes.func.isRequired,
};

function ResetPassword({ hideModal, showModal }) {
  const [email, setEmail] = useState('');
  const [emailHasBeenSent, setEmailHasBeenSent] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = ({ target: { value } }) => {
    setEmail(value);
  };

  const handleResetPassword = async event => {
    event.preventDefault();
    try {
      await auth.sendPasswordResetEmail(email);
      setError(false);
      setEmailHasBeenSent(true);
      setTimeout(() => {
        setEmailHasBeenSent(false);
      }, 3000);
    } catch (error) {
      console.log(error);
      setError('Error resetting password');
    }
  };

  useEscKeydown(() => {
    hideModal();
  });

  return (
    <div className="modal modal-auth">
      <div className="modal-auth__content">
        <div className="modal-auth__heading">
          <h6 className="modal-auth__title">Reset password</h6>
          <span onClick={hideModal} className="modal__hide">
            ×
          </span>
        </div>
        <div className="modal-auth__form">
          <form className="form" onSubmit={handleResetPassword}>
            <div className="form__group">
              {emailHasBeenSent && (
                <span className="form__text-success">
                  An email has been sent to you!
                </span>
              )}
              {error && <span className="form__text-error">{error}</span>}
              <label htmlFor="email">Email address</label>
              <input
                name="email"
                onChange={handleChange}
                className="form__input"
                id="email"
                type="email"
                placeholder="Your password"
                autoComplete="off"
              />
            </div>
            <button
              style={{ marginBottom: '0' }}
              type="submit"
              className="btn modal-auth__btn btn--secondary"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="modal-auth__footer">
          <span className="btn btn--text" onClick={() => showModal(<SignIn />)}>
            &#8592; Back to sign in
          </span>
        </div>
      </div>
    </div>
  );
}

export default connect(null, actions)(ResetPassword);
