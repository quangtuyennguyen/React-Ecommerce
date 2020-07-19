import PropTypes from 'prop-types';
import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { hideModal } from '../../actions';

Modal.propTypes = {
  modal: PropTypes.object,
};

Modal.defaultProps = {
  modal: {},
};

const body = document.getElementsByTagName('body')[0];
function Modal({ modal: { isOpen, component } }) {
  const elm = document.createElement('div');
  elm.setAttribute('id', 'modal-root');
  useEffect(() => {
    body.insertBefore(elm, body.childNodes[0]);
    return () => {
      // Remove the element from the DOM when we unmount
      body.removeChild(elm);
    };
  }, [elm]);

  return ReactDOM.createPortal(
    // Any valid React child: JSX, strings, arrays, etc.
    isOpen ? component : null,
    // A DOM element
    elm,
  );
}

const mapStateToProps = state => ({
  modal: state.modal,
});

export default connect(mapStateToProps, { hideModal })(Modal);
