import _ from 'lodash';
import PropTypes from 'prop-types';
import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchOrderInfo } from '../../actions';
import BreadCrumb from '../../components/BreadCrumb';
import Checkout from '../../components/Checkout';
import { countTotalPrice, formatter } from '../../utils';

CheckoutContainer.propTypes = {
  carts: PropTypes.array,
  fetchOrderInfo: PropTypes.func.isRequired,
};

CheckoutContainer.defaultProps = {
  carts: [],
};

function CheckoutContainer({ carts, fetchOrderInfo }) {
  const history = useHistory();
  const state = JSON.parse(localStorage.getItem('carts')) || [];

  useEffect(() => {
    document.title = 'Checkout - Shopping';
    !carts.length && history.push('cart');
  }, [carts, history]);

  const handlefetchOrderInfo = () => {
    fetchOrderInfo(carts);
  };

  const renderProducts = () =>
    _.map(state, ({ title, price, quantity }) => (
      <tr key={title}>
        <td>
          <div className="product-table__details">
            <h5 className="product-table__name">
              <p>{title}</p>
              <span>×{quantity}</span>
            </h5>
          </div>
        </td>
        <td>
          <div className="product-table__details">
            <h5 className="product-table__price">
              {formatter.format(price * quantity)}
            </h5>
          </div>
        </td>
      </tr>
    ));

  return (
    <Fragment>
      <BreadCrumb />
      <Checkout
        history={history}
        totalPrice={countTotalPrice(state)}
        handlefetchOrderInfo={handlefetchOrderInfo}
      >
        {renderProducts()}
      </Checkout>
    </Fragment>
  );
}

const mapStateToProps = state => ({
  carts: state.carts,
});

export default connect(mapStateToProps, { fetchOrderInfo })(CheckoutContainer);
