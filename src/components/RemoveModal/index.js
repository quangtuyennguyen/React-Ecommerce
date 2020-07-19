import PropTypes from 'prop-types';
import React from 'react';
import { TIMER_VALUES } from '../../constants';

RemoveModal.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  hideModal: PropTypes.func.isRequired,
  removeProductRequest: PropTypes.func.isRequired,
  toggleLoading: PropTypes.func.isRequired,
};

RemoveModal.defaultProps = {
  id: '',
  title: '',
};

export default function RemoveModal({
  id,
  title,
  hideModal,
  removeProductRequest,
  toggleLoading,
}) {
  const handleRemoveProduct = () => {
    hideModal();
    toggleLoading(TIMER_VALUES.main, () => {
      removeProductRequest(id);
    });
  };

  return (
    <div className="modal modal-remove">
      <div className="modal__heading">
        <h4 className="modal__title">Remove Product</h4>
        <span onClick={hideModal} className="modal-icon__cancel">
          ×
        </span>
      </div>
      <div className="modal-remove__content">
        <p className="modal-remove__text">
          Are you sure want to delete <b>{title}?</b>
        </p>
      </div>
      <div className="modal-footer">
        <div className="btn-group">
          <button
            type="button"
            onClick={hideModal}
            className="btn btn-remove btn-remove--secondary"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleRemoveProduct}
            className="btn btn-remove btn-remove--primary"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
}
