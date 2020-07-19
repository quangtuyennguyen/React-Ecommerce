import { Field, Form, withFormik } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import * as Yup from 'yup';
import { TIMER_VALUES } from '../../../../../constants';
import { ranDomAvatar } from '../../../../../utils';
import SignIn from '../../../../Auth/SignIn';

PostComment.propTypes = {
  values: PropTypes.object,
  handleChange: PropTypes.func.isRequired,
  errors: PropTypes.object,
  handleSubmit: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  touched: PropTypes.object,
  isValid: PropTypes.bool,
};

PostComment.defaultProps = {
  values: {},
  errors: {},
  touched: {},
  isValid: true,
};

function PostComment({
  values,
  handleChange,
  errors,
  handleSubmit,
  handleBlur,
  touched,
  isValid,
}) {
  return (
    <div className="comment__post">
      <Form className="form" onSubmit={handleSubmit}>
        <div className="form__group">
          <label htmlFor={values.pros}>Pros</label>
          <Field name="pros">
            {({ field }) => (
              <input
                id="pros"
                className="form__input"
                type="text"
                autoComplete="off"
                {...field}
              />
            )}
          </Field>
          {touched.pros && errors.pros && (
            <span className="form__text-error">{errors.pros}</span>
          )}
        </div>
        <div className="form__group">
          <label htmlFor={values.cons}>Cons</label>
          <Field name="cons">
            {({ field }) => (
              <input
                id="cons"
                className="form__input"
                type="text"
                autoComplete="off"
                {...field}
              />
            )}
          </Field>
          {touched.cons && errors.cons && (
            <span className="form__text-error">{errors.cons}</span>
          )}
        </div>
        <div className="form__group">
          <label>Rating*</label>
          <select
            id="rating"
            name="rating"
            onChange={handleChange}
            value={values.rating}
            onBlur={handleBlur}
            className="select"
          >
            <option value="">Rating*</option>
            <option value={5}>5 stars</option>
            <option value={4}>4 stars</option>
            <option value={3}>3 stars</option>
            <option value={2}>2 stars</option>
            <option value={1}>1 star</option>
          </select>
          {touched.rating && errors.rating && (
            <span className="form__text-error">{errors.rating}</span>
          )}
        </div>
        <div className="form__group">
          <label htmlFor={values.body}>Description</label>
          <Field name="body">
            {({ field }) => (
              <textarea
                id={values.body}
                className="form__textarea"
                rows={10}
                cols={30}
                type="text"
                {...field}
              />
            )}
          </Field>
          {touched.body && errors.body && (
            <span className="form__text-error">{errors.body}</span>
          )}
        </div>
        <button
          disabled={!isValid}
          type="submit"
          className="btn btn--secondary btn--round u-margin-top-small u-margin-bottom-medium"
        >
          Submit a review
        </button>
      </Form>
    </div>
  );
}

const MyEnhancedForm = withFormik({
  mapPropsToValues: () => ({
    pros: '',
    cons: '',
    rating: '',
    body: '',
  }),

  validationSchema: Yup.object().shape({
    pros: Yup.string().required('Pros is required'),
    cons: Yup.string().required('Cons is required'),
    rating: Yup.string().required('Rating is required'),
    body: Yup.string().required('Description is required'),
  }),
  handleSubmit: (
    values,
    {
      resetForm,
      props: {
        displayName,
        productCurrentId,
        addProductCommentRequest,
        toggleLoading,
        showModal,
      },
    },
  ) => {
    if (displayName) {
      const { rating } = values;
      const date = new Date().getTime();
      const newValues = {
        ...values,
        id: uuidv4(),
        username: displayName,
        rating: parseInt(rating),
        like: 0,
        dislike: 0,
        date,
        avatar: ranDomAvatar(100),
      };
      toggleLoading(TIMER_VALUES.sub, () => {
        addProductCommentRequest({ productId: productCurrentId, ...newValues });
        resetForm();
      });
    } else {
      showModal(<SignIn />);
    }
  },
  displayName: 'PostComment',
})(PostComment);

export default MyEnhancedForm;
