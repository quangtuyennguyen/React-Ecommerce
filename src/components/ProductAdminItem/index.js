import PropTypes from 'prop-types';
import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import slug from 'slug';

import { formatter } from '../../utils';
import RemoveModal from '../RemoveModal';

ProductAdminItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  category: PropTypes.string,
  images: PropTypes.array,
  rating: PropTypes.number,
  price: PropTypes.number,
  description: PropTypes.string,
  sale: PropTypes.string,
  discountEndTime: PropTypes.number,
  showModal: PropTypes.func.isRequired,
  hideModal: PropTypes.func.isRequired,
  removeProductRequest: PropTypes.func.isRequired,
  handleFetchProductEdit: PropTypes.func.isRequired,
  sizes: PropTypes.array,
  toggleLoading: PropTypes.func.isRequired,
};

ProductAdminItem.defaultProps = {
  id: '',
  title: '',
  subTitle: '',
  category: '',
  images: [],
  rating: 0,
  price: 0,
  description: '',
  sale: '',
  discountEndTime: 0,
  sizes: [],
};

export default function ProductAdminItem({
  id,
  title,
  subTitle,
  category,
  images,
  rating,
  price,
  description,
  sale,
  discountEndTime,
  showModal,
  hideModal,
  removeProductRequest,
  handleFetchProductEdit,
  sizes,
  toggleLoading,
}) {
  const [isShowMore, setIsShowMore] = useState(false);
  return (
    <tr>
      <td>
        <Link to={`/product/${slug(title.toLowerCase())}.${id}`}>
          <img className="table-admin__image" src={images[0]} alt="" />
        </Link>
      </td>
      <td>
        <p className="table-admin__heading table-admin__heading--sub">
          <b>Title: </b>
          <Link to={`/product/${slug(title.toLowerCase())}.${id}`} alt="">
            {title}
          </Link>
        </p>
        <p className="table-admin__heading table-admin__heading--sub">
          <b>SubTitle: </b>
          {subTitle}
        </p>
      </td>
      <td>
        {description && (
          <p className="table-admin__heading table-admin__heading--sub table-admin__heading--sub-desc">
            <b>Desciption: </b>
            {description}
          </p>
        )}
        {isShowMore ? (
          <Fragment>
            <p className="table-admin__heading table-admin__heading--sub">
              <b>Rating: </b>
              {rating}
            </p>
            <p className="table-admin__heading table-admin__heading--sub">
              <b>Price: </b>
              {formatter.format(price)}
            </p>
            <p className="table-admin__heading table-admin__heading--sub">
              <b>Category: </b>
              {category}
            </p>
          </Fragment>
        ) : null}
        <button
          type="button"
          onClick={() => setIsShowMore(!isShowMore)}
          className="btn btn--link btn--link-secondary"
        >
          {isShowMore ? 'Show less' : 'Show more'}
        </button>
      </td>
      <td>
        <div className="btn-group">
          <button
            type="button"
            onClick={() =>
              handleFetchProductEdit({
                id,
                title,
                sizes,
                subTitle,
                sale,
                category,
                discountEndTime,
                images,
                rating,
                price,
                description,
              })
            }
            className="btn btn__square btn__square--warning"
          >
            <i className="far fa-edit" />
          </button>
          <button
            type="button"
            onClick={() =>
              showModal(
                <RemoveModal
                  toggleLoading={toggleLoading}
                  removeProductRequest={removeProductRequest}
                  id={id}
                  title={title}
                  hideModal={hideModal}
                />,
              )
            }
            className="btn btn__square btn__square--danger"
          >
            <i className="far fa-trash-alt" />
          </button>
        </div>
      </td>
    </tr>
  );
}
