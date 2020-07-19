import { Field, Form, withFormik } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import * as Yup from 'yup';

import { TIMER_VALUES } from '../../../../constants';
import { ranDomAvatar } from '../../../../utils';
import SignIn from '../../../Auth/SignIn';

PostCommentForm.propTypes = {
  touched: PropTypes.object,
  errors: PropTypes.object,
  values: PropTypes.object,
  handleSubmit: PropTypes.func.isRequired,
  isValid: PropTypes.bool,
};

PostCommentForm.defaultProps = {
  touched: {},
  errors: {},
  values: {},
  isValid: true,
};

function PostCommentForm({ touched, errors, values, handleSubmit, isValid }) {
  return (
    <div className="post-comment__form">
      <img
        src="https://res.cloudinary.com/shopping-assets/image/upload/v1586259775/Untitled-1_psoto1.png"
        alt=""
        className="post-comment__image"
      />
      <Form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <Field name="body">
            {({ field }) => (
              <textarea
                className="form__textarea"
                cols={30}
                value={values.body}
                rows={4}
                placeholder="Write comment..."
                {...field}
              />
            )}
          </Field>
          {touched.body && errors.body && (
            <span style={{ marginTop: '1rem' }} className="form__text-error">
              {errors.body}
            </span>
          )}
        </div>
        <button
          disabled={!isValid}
          className="btn btn--secondary"
          type="submit"
        >
          Post comment
        </button>
      </Form>
    </div>
  );
}

const MyEnhancedForm = withFormik({
  mapPropsToValues: () => ({
    body: '',
  }),
  validationSchema: Yup.object().shape({
    body: Yup.string().required('Content is required'),
  }),
  handleSubmit: (
    values,
    {
      resetForm,
      props: {
        addReplyRequest,
        addPostCommentRequest,
        postCurrentId: postId,
        commentId,
        toggleLoading,
        displayName,
        showModal,
      },
    },
  ) => {
    const date = new Date().getTime();
    const useravatar = ranDomAvatar(100);
    if (displayName) {
      if (!commentId) {
        toggleLoading(TIMER_VALUES.main, () => {
          addPostCommentRequest(
            {
              id: uuidv4(),
              postId,
              ...values,
              date,
              username: displayName,
              useravatar,
            },
            () => {
              resetForm();
            },
          );
        });
      } else {
        toggleLoading(TIMER_VALUES.main, () => {
          addReplyRequest(
            {
              id: uuidv4(),
              ...values,
              date,
              username: displayName,
              useravatar,
            },
            commentId,
            () => {
              resetForm();
            },
          );
        });
      }
    } else {
      showModal(<SignIn />);
    }
  },
  displayName: 'PostCommentForm',
})(PostCommentForm);

export default MyEnhancedForm;
