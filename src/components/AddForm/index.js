import { Field, Form, withFormik } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import * as Yup from 'yup';
import * as actions from '../../actions';
import { TIMER_VALUES } from '../../constants';
import { formatProductFields } from '../../utils';
import useEscKeydown from '../../utils/useEscKeydown';

AddProductForm.propTypes = {
  hideModal: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  values: PropTypes.object,
  touched: PropTypes.object,
  errors: PropTypes.object,
  isValid: PropTypes.bool,
};

AddProductForm.defaultProps = {
  values: {},
  touched: {},
  errors: {},
  isValid: {},
};

function AddProductForm({
  hideModal,
  handleChange,
  handleSubmit,
  handleBlur,
  values,
  touched,
  errors,
  isValid,
}) {
  useEscKeydown(() => {
    hideModal();
  });

  return (
    <div className="modal modal-save">
      <div className="modal__heading">
        <h4 className="modal__title">Add Product</h4>
        <span onClick={hideModal} className="modal-icon__cancel">
          ×
        </span>
      </div>
      <Form className="form-save" onSubmit={handleSubmit}>
        <div className="form-save__group">
          <label htmlFor="title" className="form-save__title">
            Title
          </label>
          <div style={{ width: '100%' }}>
            <div className="form-group">
              <Field name="title">
                {({ field }) => (
                  <input
                    id="title"
                    className="form__input"
                    placeholder="Title"
                    type="text"
                    autoComplete="off"
                    {...field}
                  />
                )}
              </Field>
            </div>
            {touched.title && errors.title && (
              <span className="form__text-error">{errors.title}</span>
            )}
          </div>
        </div>
        <div className="form-save__group">
          <label htmlFor="subTitle" className="form-save__title">
            SubTitle
          </label>
          <div style={{ width: '100%' }}>
            <div className="form-group">
              <Field name="subTitle">
                {({ field }) => (
                  <input
                    id="subTitle"
                    className="form__input"
                    placeholder="Sub title"
                    type="text"
                    autoComplete="off"
                    {...field}
                  />
                )}
              </Field>
            </div>
            {touched.subTitle && errors.subTitle && (
              <span className="form__text-error">{errors.subTitle}</span>
            )}
          </div>
        </div>
        <div className="form-save__group">
          <label htmlFor="image" className="form-save__title">
            Images
          </label>
          <div style={{ width: '100%' }}>
            <div className="form-group">
              <Field name="images">
                {({ field }) => (
                  <input
                    id="image"
                    className="form__input"
                    placeholder="Images link"
                    type="text"
                    autoComplete="off"
                    {...field}
                  />
                )}
              </Field>
            </div>
            {touched.images && errors.images && (
              <span className="form__text-error">{errors.images}</span>
            )}
          </div>
        </div>
        <div className="form-save__group">
          <label htmlFor="price" className="form-save__title">
            Price
          </label>
          <div style={{ width: '100%' }}>
            <div className="form-group">
              <span className="modal-save__text-type">USD</span>
              <Field name="price">
                {({ field }) => (
                  <input
                    id="price"
                    className="form__input"
                    placeholder="Price"
                    type="text"
                    autoComplete="off"
                    {...field}
                  />
                )}
              </Field>
            </div>
            {touched.price && errors.price && (
              <span className="form__text-error">{errors.price}</span>
            )}
          </div>
        </div>
        <div className="form-save__group form-save__group-variant">
          <div className="form-save__select">
            <label className="form-save__title">Rating</label>
            <select
              onChange={handleChange}
              name="rating"
              value={values.rating}
              style={{ width: '7rem' }}
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
          </div>
          <div className="form-save__group">
            <label
              htmlFor="sale"
              className="form-save__title"
              style={{ minWidth: '5rem' }}
            >
              Sale
            </label>
            <div style={{ width: '100%' }}>
              <div className="form-group">
                <span className="modal-save__text-type">%</span>
                <Field name="sale">
                  {({ field }) => (
                    <input
                      id="sale"
                      className="form__input"
                      placeholder="Sale"
                      type="text"
                      autoComplete="off"
                      {...field}
                    />
                  )}
                </Field>
              </div>
            </div>
          </div>
          <div className="form-save__group">
            <label htmlFor="discountEndTime" className="form-save__title">
              Time end
            </label>
            <Field name="discountEndTime">
              {({ field }) => (
                <input
                  id="discountEndTime"
                  className="form__input"
                  placeholder="Discount end time"
                  type="text"
                  autoComplete="off"
                  {...field}
                />
              )}
            </Field>
          </div>
        </div>
        <div className="form-save__group">
          <label className="form-save__title">Category</label>
          <div style={{ width: '100%' }}>
            <select
              name="category"
              onChange={handleChange}
              value={values.category}
              onBlur={handleBlur}
            >
              <option value="">Select category</option>
              <option value="Mobile">Mobile</option>
              <option value="Headphone">Headphone</option>
              <option value="Speaker">Speaker</option>
              <option value="Computer">Computer</option>
              <option value="Women Clothing">Women Clothing</option>
              <option value="Men Clothing">Men Clothing</option>
              <option value="Watches">Watches</option>
              <option value="Camera">Camera</option>
            </select>
            {touched.category && errors.category && (
              <span className="form__text-error">{errors.category}</span>
            )}
          </div>
        </div>
        {typeof values.sizes !== 'undefined' ? (
          <div className="form-save__group" style={{ alignItems: 'center' }}>
            <div className="form-save__group">
              <label htmlFor="size" className="form-save__title">
                Sizes
              </label>
              <div style={{ width: '100%' }}>
                <div className="form-group">
                  <Field name="sizes">
                    {({ field }) => (
                      <input
                        id="size"
                        className="form__input"
                        placeholder="Sizes"
                        type="text"
                        autoComplete="off"
                        {...field}
                      />
                    )}
                  </Field>
                </div>
              </div>
            </div>
            <button type="button" className="btn btn--secondary">
              Save
            </button>
          </div>
        ) : null}
        <div className="form-save__group">
          <label
            htmlFor="desc"
            className="form-save__title"
            style={{ alignSelf: 'normal', paddingTop: '1.2rem' }}
          >
            Desc
          </label>
          <div className="form-save__footer">
            <Field name="description">
              {({ field }) => (
                <textarea
                  id="desc"
                  className="form__textarea"
                  rows={2}
                  cols={50}
                  style={{ marginBottom: '1rem' }}
                  {...field}
                />
              )}
            </Field>
            {touched.description && errors.description && (
              <span className="form__text-error">{errors.description}</span>
            )}
            <button
              disabled={!isValid}
              className="btn btn--secondary"
              type="submit"
            >
              Save
            </button>
          </div>
        </div>
      </Form>
    </div>
  );
}

const MyEnhancedForm = withFormik({
  mapPropsToValues({ initialValues }) {
    // Init form field
    const {
      id,
      title,
      subTitle,
      images,
      price,
      rating,
      category,
      sale,
      sizes,
      description,
      discountEndTime,
    } = initialValues;
    return {
      id,
      title,
      subTitle,
      images,
      price,
      rating,
      category,
      sale,
      sizes,
      discountEndTime,
      description,
    };
  },
  validationSchema: Yup.object().shape({
    // Validate form field
    title: Yup.string().required('Title is required'),
    subTitle: Yup.string().required('Sub title is required'),
    images: Yup.string().required('Image link is required'),
    price: Yup.number()
      .required('Price is required')
      .round('round')
      .moreThan(9, 'Minimum price is 10')
      .typeError('Price must be a number'),
    category: Yup.string().required('Category is required'),
    description: Yup.string().required('Description is required'),
  }),
  handleSubmit: (
    values,
    {
      resetForm,
      props: {
        editProductRequest,
        addProductRequest,
        hideModal,
        toggleLoading,
      },
    },
  ) => {
    const item = formatProductFields(values);
    const { id } = item;
    if (id) {
      hideModal();
      toggleLoading(TIMER_VALUES.main, () => {
        resetForm();
        editProductRequest(item);
      });
    } else {
      hideModal();
      toggleLoading(TIMER_VALUES.main, () => {
        resetForm();
        addProductRequest({ ...item, id: uuidv4() });
      });
    }
  },
  displayName: 'AddProductForm',
})(AddProductForm);

const mapStateToProps = state => ({
  initialValues: state.productEdit,
});

export default connect(mapStateToProps, actions)(MyEnhancedForm);
