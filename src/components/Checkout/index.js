import { Field, Form, withFormik } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import * as Yup from 'yup';

import * as actions from '../../actions';
import { TIMER_VALUES } from '../../constants';
import { formatter } from '../../utils';

Checkout.propTypes = {
  children: PropTypes.array,
  totalPrice: PropTypes.number,
  values: PropTypes.object,
  errors: PropTypes.object,
  touched: PropTypes.object,
  handleSubmit: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  isValid: PropTypes.bool,
};

Checkout.defaultProps = {
  children: [],
  totalPrice: 0,
  values: {},
  errors: {},
  touched: {},
  isValid: true,
};

function Checkout({
  children,
  totalPrice,
  values,
  errors,
  touched,
  handleSubmit,
  handleChange,
  handleBlur,
  isValid,
}) {
  return (
    <section id="section-checkout">
      <div className="row">
        <div className="col span_1_of_2">
          <div className="box-form">
            <h3 className="heading-title--main--medium">Billing details</h3>
            <Form className="form" onSubmit={handleSubmit}>
              <div className="u-d-flex-start">
                <div className="form__group">
                  <label htmlFor="firstname">First name *</label>
                  <Field name="firstname">
                    {({ field }) => (
                      <input
                        className="form__input"
                        type="text"
                        id="firstname"
                        autoComplete="off"
                        {...field}
                      />
                    )}
                  </Field>
                  {touched.firstname && errors.firstname && (
                    <span className="form__text-error">{errors.firstname}</span>
                  )}
                </div>
                <div className="form__group">
                  <label htmlFor="lastname">Last name *</label>
                  <Field name="lastname">
                    {({ field }) => (
                      <input
                        className="form__input"
                        type="text"
                        id="lastname"
                        autoComplete="off"
                        {...field}
                      />
                    )}
                  </Field>
                  {touched.lastname && errors.lastname && (
                    <span className="form__text-error">{errors.lastname}</span>
                  )}
                </div>
              </div>
              <div className="form__group">
                <label htmlFor="phone">Phone *</label>
                <Field name="phone">
                  {({ field }) => (
                    <input
                      className="form__input"
                      type="text"
                      id="phone"
                      autoComplete="off"
                      {...field}
                    />
                  )}
                </Field>
                {touched.phone && errors.phone && (
                  <span className="form__text-error">{errors.phone}</span>
                )}
              </div>
              <div className="form__group">
                <label htmlFor="email">Email address *</label>
                <Field name="email">
                  {({ field }) => (
                    <input
                      className="form__input"
                      type="text"
                      id="email"
                      autoComplete="off"
                      {...field}
                    />
                  )}
                </Field>
                {touched.email && errors.email && (
                  <span className="form__text-error">{errors.email}</span>
                )}
              </div>
              <div className="form__group">
                <label htmlFor="company">Company name (optional)</label>
                <Field name="company">
                  {({ field }) => (
                    <input
                      className="form__input"
                      type="text"
                      id="company"
                      autoComplete="off"
                      {...field}
                    />
                  )}
                </Field>
                {touched.company && errors.company && (
                  <span className="form__text-error">{errors.company}</span>
                )}
              </div>
              <div className="form__group">
                <label>Country *</label>
                <select
                  name="country"
                  id="country"
                  className="select"
                  autoComplete="off"
                  value={values.country}
                  onBlur={handleBlur}
                  onChange={handleChange}
                >
                  <option value="">Select a country…</option>
                  <option value="AF">Afghanistan</option>
                  <option value="AL">Albania</option>
                  <option value="DZ">Algeria</option>
                  <option value="AS">American Samoa</option>
                  <option value="AD">Andorra</option>
                  <option value="AO">Angola</option>
                  <option value="AI">Anguilla</option>
                  <option value="AQ">Antarctica</option>
                  <option value="AG">Antigua and Barbuda</option>
                  <option value="AR">Argentina</option>
                  <option value="AM">Armenia</option>
                  <option value="AW">Aruba</option>
                  <option value="AU">Australia</option>
                  <option value="AT">Austria</option>
                  <option value="AZ">Azerbaijan</option>
                  <option value="BS">Bahamas</option>
                  <option value="BH">Bahrain</option>
                  <option value="BD">Bangladesh</option>
                  <option value="BB">Barbados</option>
                  <option value="BY">Belarus</option>
                  <option value="PW">Belau</option>
                  <option value="BE">Belgium</option>
                  <option value="BZ">Belize</option>
                  <option value="BJ">Benin</option>
                  <option value="BM">Bermuda</option>
                  <option value="BT">Bhutan</option>
                  <option value="BO">Bolivia</option>
                  <option value="BQ">Bonaire, Saint Eustatius and Saba</option>
                  <option value="BA">Bosnia and Herzegovina</option>
                  <option value="BW">Botswana</option>
                  <option value="BV">Bouvet Island</option>
                  <option value="BR">Brazil</option>
                  <option value="IO">British Indian Ocean Territory</option>
                  <option value="BN">Brunei</option>
                  <option value="BG">Bulgaria</option>
                  <option value="BF">Burkina Faso</option>
                  <option value="BI">Burundi</option>
                  <option value="KH">Cambodia</option>
                  <option value="CM">Cameroon</option>
                  <option value="CA">Canada</option>
                  <option value="CV">Cape Verde</option>
                  <option value="KY">Cayman Islands</option>
                  <option value="CF">Central African Republic</option>
                  <option value="TD">Chad</option>
                  <option value="CL">Chile</option>
                  <option value="CN">China</option>
                  <option value="CX">Christmas Island</option>
                  <option value="CC">Cocos (Keeling) Islands</option>
                  <option value="CO">Colombia</option>
                  <option value="KM">Comoros</option>
                  <option value="CG">Congo (Brazzaville)</option>
                  <option value="CD">Congo (Kinshasa)</option>
                  <option value="CK">Cook Islands</option>
                  <option value="CR">Costa Rica</option>
                  <option value="HR">Croatia</option>
                  <option value="CU">Cuba</option>
                  <option value="CW">Curaçao</option>
                  <option value="CY">Cyprus</option>
                  <option value="CZ">Czech Republic</option>
                  <option value="DK">Denmark</option>
                  <option value="DJ">Djibouti</option>
                  <option value="DM">Dominica</option>
                  <option value="DO">Dominican Republic</option>
                  <option value="EC">Ecuador</option>
                  <option value="EG">Egypt</option>
                  <option value="SV">El Salvador</option>
                  <option value="GQ">Equatorial Guinea</option>
                  <option value="ER">Eritrea</option>
                  <option value="EE">Estonia</option>
                  <option value="ET">Ethiopia</option>
                  <option value="FK">Falkland Islands</option>
                  <option value="FO">Faroe Islands</option>
                  <option value="FJ">Fiji</option>
                  <option value="FI">Finland</option>
                  <option value="FR">France</option>
                  <option value="GF">French Guiana</option>
                  <option value="PF">French Polynesia</option>
                  <option value="TF">French Southern Territories</option>
                  <option value="GA">Gabon</option>
                  <option value="GM">Gambia</option>
                  <option value="GE">Georgia</option>
                  <option value="DE">Germany</option>
                  <option value="GH">Ghana</option>
                  <option value="GI">Gibraltar</option>
                  <option value="GR">Greece</option>
                  <option value="GL">Greenland</option>
                  <option value="GD">Grenada</option>
                  <option value="GP">Guadeloupe</option>
                  <option value="GU">Guam</option>
                  <option value="GT">Guatemala</option>
                  <option value="GG">Guernsey</option>
                  <option value="GN">Guinea</option>
                  <option value="GW">Guinea-Bissau</option>
                  <option value="GY">Guyana</option>
                  <option value="HT">Haiti</option>
                  <option value="HM">Heard Island and McDonald Islands</option>
                  <option value="HN">Honduras</option>
                  <option value="HK">Hong Kong</option>
                  <option value="HU">Hungary</option>
                  <option value="IS">Iceland</option>
                  <option value="IN">India</option>
                  <option value="ID">Indonesia</option>
                  <option value="IR">Iran</option>
                  <option value="IQ">Iraq</option>
                  <option value="IE">Ireland</option>
                  <option value="IM">Isle of Man</option>
                  <option value="IL">Israel</option>
                  <option value="IT">Italy</option>
                  <option value="CI">Ivory Coast</option>
                  <option value="JM">Jamaica</option>
                  <option value="JP">Japan</option>
                  <option value="JE">Jersey</option>
                  <option value="JO">Jordan</option>
                  <option value="KZ">Kazakhstan</option>
                  <option value="KE">Kenya</option>
                  <option value="KI">Kiribati</option>
                  <option value="KW">Kuwait</option>
                  <option value="KG">Kyrgyzstan</option>
                  <option value="LA">Laos</option>
                  <option value="LV">Latvia</option>
                  <option value="LB">Lebanon</option>
                  <option value="LS">Lesotho</option>
                  <option value="LR">Liberia</option>
                  <option value="LY">Libya</option>
                  <option value="LI">Liechtenstein</option>
                  <option value="LT">Lithuania</option>
                  <option value="LU">Luxembourg</option>
                  <option value="MO">Macao</option>
                  <option value="MG">Madagascar</option>
                  <option value="MW">Malawi</option>
                  <option value="MY">Malaysia</option>
                  <option value="MV">Maldives</option>
                  <option value="ML">Mali</option>
                  <option value="MT">Malta</option>
                  <option value="MH">Marshall Islands</option>
                  <option value="MQ">Martinique</option>
                  <option value="MR">Mauritania</option>
                  <option value="MU">Mauritius</option>
                  <option value="YT">Mayotte</option>
                  <option value="MX">Mexico</option>
                  <option value="FM">Micronesia</option>
                  <option value="MD">Moldova</option>
                  <option value="MC">Monaco</option>
                  <option value="MN">Mongolia</option>
                  <option value="ME">Montenegro</option>
                  <option value="MS">Montserrat</option>
                  <option value="MA">Morocco</option>
                  <option value="MZ">Mozambique</option>
                  <option value="MM">Myanmar</option>
                  <option value="NA">Namibia</option>
                  <option value="NR">Nauru</option>
                  <option value="NP">Nepal</option>
                  <option value="NL">Netherlands</option>
                  <option value="NC">New Caledonia</option>
                  <option value="NZ">New Zealand</option>
                  <option value="NI">Nicaragua</option>
                  <option value="NE">Niger</option>
                  <option value="NG">Nigeria</option>
                  <option value="NU">Niue</option>
                  <option value="NF">Norfolk Island</option>
                  <option value="KP">North Korea</option>
                  <option value="MK">North Macedonia</option>
                  <option value="MP">Northern Mariana Islands</option>
                  <option value="NO">Norway</option>
                  <option value="OM">Oman</option>
                  <option value="PK">Pakistan</option>
                  <option value="PS">Palestinian Territory</option>
                  <option value="PA">Panama</option>
                  <option value="PG">Papua New Guinea</option>
                  <option value="PY">Paraguay</option>
                  <option value="PE">Peru</option>
                  <option value="PH">Philippines</option>
                  <option value="PN">Pitcairn</option>
                  <option value="PL">Poland</option>
                  <option value="PT">Portugal</option>
                  <option value="PR">Puerto Rico</option>
                  <option value="QA">Qatar</option>
                  <option value="RE">Reunion</option>
                  <option value="RO">Romania</option>
                  <option value="RU">Russia</option>
                  <option value="RW">Rwanda</option>
                  <option value="ST">São Tomé and Príncipe</option>
                  <option value="BL">Saint Barthélemy</option>
                  <option value="SH">Saint Helena</option>
                  <option value="KN">Saint Kitts and Nevis</option>
                  <option value="LC">Saint Lucia</option>
                  <option value="SX">Saint Martin (Dutch part)</option>
                  <option value="MF">Saint Martin (French part)</option>
                  <option value="PM">Saint Pierre and Miquelon</option>
                  <option value="VC">Saint Vincent and the Grenadines</option>
                  <option value="WS">Samoa</option>
                  <option value="SM">San Marino</option>
                  <option value="SA">Saudi Arabia</option>
                  <option value="SN">Senegal</option>
                  <option value="RS">Serbia</option>
                  <option value="SC">Seychelles</option>
                  <option value="SL">Sierra Leone</option>
                  <option value="SG">Singapore</option>
                  <option value="SK">Slovakia</option>
                  <option value="SI">Slovenia</option>
                  <option value="SB">Solomon Islands</option>
                  <option value="SO">Somalia</option>
                  <option value="ZA">South Africa</option>
                  <option value="GS">South Georgia/Sandwich Islands</option>
                  <option value="KR">South Korea</option>
                  <option value="SS">South Sudan</option>
                  <option value="ES">Spain</option>
                  <option value="LK">Sri Lanka</option>
                  <option value="SD">Sudan</option>
                  <option value="SR">Suriname</option>
                  <option value="SJ">Svalbard and Jan Mayen</option>
                  <option value="SZ">Swaziland</option>
                  <option value="SE">Sweden</option>
                  <option value="CH">Switzerland</option>
                  <option value="SY">Syria</option>
                  <option value="TW">Taiwan</option>
                  <option value="TJ">Tajikistan</option>
                  <option value="TZ">Tanzania</option>
                  <option value="TH">Thailand</option>
                  <option value="TL">Timor-Leste</option>
                  <option value="TG">Togo</option>
                  <option value="TK">Tokelau</option>
                  <option value="TO">Tonga</option>
                  <option value="TT">Trinidad and Tobago</option>
                  <option value="TN">Tunisia</option>
                  <option value="TR">Turkey</option>
                  <option value="TM">Turkmenistan</option>
                  <option value="TC">Turks and Caicos Islands</option>
                  <option value="TV">Tuvalu</option>
                  <option value="UG">Uganda</option>
                  <option value="UA">Ukraine</option>
                  <option value="AE">United Arab Emirates</option>
                  <option value="GB">United Kingdom (UK)</option>
                  <option value="US">United States (US)</option>
                  <option value="UM">
                    United States (US) Minor Outlying Islands
                  </option>
                  <option value="UY">Uruguay</option>
                  <option value="UZ">Uzbekistan</option>
                  <option value="VU">Vanuatu</option>
                  <option value="VA">Vatican</option>
                  <option value="VE">Venezuela</option>
                  <option value="VN">Vietnam</option>
                  <option value="VG">Virgin Islands (British)</option>
                  <option value="VI">Virgin Islands (US)</option>
                  <option value="WF">Wallis and Futuna</option>
                  <option value="EH">Western Sahara</option>
                  <option value="YE">Yemen</option>
                  <option value="ZM">Zambia</option>
                  <option value="ZW">Zimbabwe</option>
                </select>
                {touched.country && errors.country && (
                  <span className="form__text-error">{errors.country}</span>
                )}
              </div>
              <div className="form__group">
                <label htmlFor="address">Street address *</label>
                <Field name="address">
                  {({ field }) => (
                    <input
                      className="form__input"
                      type="text"
                      id="address"
                      autoComplete="off"
                      {...field}
                    />
                  )}
                </Field>
                {touched.address && errors.address && (
                  <span className="form__text-error">{errors.address}</span>
                )}
              </div>
              <div className="form__group">
                <label htmlFor="city">Town / City *</label>
                <Field name="city">
                  {({ field }) => (
                    <input
                      className="form__input"
                      type="text"
                      id="city"
                      autoComplete="off"
                      {...field}
                    />
                  )}
                </Field>
                {touched.city && errors.city && (
                  <span className="form__text-error">{errors.city}</span>
                )}
              </div>
            </Form>
          </div>
        </div>
        <div className="col span_1_of_2">
          <h3 className="heading-title--main--medium">Your order</h3>
          <table className="product-table product-table--checkout">
            <tbody>
              <tr>
                <th style={{ width: '70%' }} className="product-table__heading">
                  Product
                </th>
                <th
                  style={{ width: '30%' }}
                  className="product-table__heading u-padding-horizontal"
                >
                  Subtotal
                </th>
              </tr>
              {children}
              <tr>
                <td>
                  <h5 className="product-table__heading">Shipping</h5>
                </td>
                <td>
                  <h5 className="product-table__heading u-padding-horizontal">
                    {formatter.format(totalPrice * 1.01 - totalPrice)}
                  </h5>
                </td>
              </tr>
              <tr>
                <td>
                  <h5 className="product-table__heading">Total</h5>
                </td>
                <td>
                  <h5 className="product-table__price">
                    {formatter.format(totalPrice * 1.01)}
                  </h5>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="payment-box">
            <div className="payment">
              <span className="payment__title">Cash on delivery</span>
              <span className="payment__desc">
                Pay with cash upon delivery.
              </span>
            </div>
            <button
              disabled={!isValid}
              onClick={handleSubmit}
              type="submit"
              className="btn btn--secondary"
            >
              Place order
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

const MyEnhancedForm = withFormik({
  mapPropsToValues({
    userInfo: {
      firstname,
      lastname,
      email,
      phone,
      company,
      address,
      city,
      country,
    },
  }) {
    // Init form field
    return {
      firstname,
      lastname,
      email,
      phone,
      company,
      address,
      city,
      country,
    };
  },
  validationSchema: Yup.object().shape({
    // Validate form field
    firstname: Yup.string().required('First name is required'),
    lastname: Yup.string().required('Last name is required'),
    phone: Yup.number()
      .required('Phone is required')
      .typeError('Phone must be a number'),
    email: Yup.string()
      .required('Email is required')
      .email('Email is invalid'),
    country: Yup.string().required('Country is required'),
    address: Yup.string().required('Address is required'),
    city: Yup.string().required('City is required'),
  }),
  handleSubmit: (
    userInfo,
    {
      props: {
        placeOrder,
        clearAllFromCart,
        history,
        handlefetchOrderInfo,
        toggleLoading,
      },
    },
  ) => {
    toggleLoading(TIMER_VALUES.main, () => {
      placeOrder(userInfo);
      handlefetchOrderInfo();
      clearAllFromCart(() => {
        history.push(
          `/checkout/order-received/${Math.trunc(Math.random() * 50000)}`,
        );
      });
    });
  },

  displayName: 'Checkout',
})(Checkout);

const mapStateToProps = state => ({
  userInfo: state.orderDetails.userInfo,
});

export default connect(mapStateToProps, actions)(MyEnhancedForm);
