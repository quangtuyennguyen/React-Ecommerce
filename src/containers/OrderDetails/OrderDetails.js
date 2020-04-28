import _ from 'lodash';
import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import OrderDetails from '../../components/OrderDetails/OrderDetails';
import { countTotalPrice, formatter } from '../../utils';
import { Link } from 'react-router-dom';
import slug from 'slug';


function OrderDetailsContainer({ carts }) {
    const renderProducts = () => (
        _.map(carts, ({ id, title, price, quantity }) => (
            <tr key={id}>
                <td>
                    <div className="product-table__details">
                        <h5 className="product-table__name">
                            <Link to={`/product/${slug(title.toLowerCase())}.${id}`}>
                                <p>{title}</p>
                                <span>× {quantity}</span>
                            </Link>
                        </h5>
                    </div>
                </td>
                <td>
                    <div className="product-table__details">
                        <h5 className="product-table__price">{formatter.format(price * quantity)}</h5>
                    </div>
                </td>
            </tr>
        ))
    );
    return (
        <Fragment>
            <OrderDetails
                totalPrice={countTotalPrice(carts)}
                carts={carts} >
                {renderProducts()}
            </OrderDetails>
        </Fragment>
    );
};

const mapStateToProps = state => ({
    carts: state.orderDetails.orderInfo
});

export default connect(mapStateToProps)(OrderDetailsContainer);