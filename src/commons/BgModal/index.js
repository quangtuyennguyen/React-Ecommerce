import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions';

const body = document.getElementsByTagName('body')[0];
class BgModal extends React.Component {
  constructor(props) {
    super(props);
    this.elm = document.createElement('div');
    this.elm.setAttribute('id', 'hide-modal');
  }

  componentDidMount() {
    body.appendChild(this.elm);
  }

  componentWillUnmount() {
    // Remove the element from the DOM when we unmount
    body.removeChild(this.elm);
  }

  render() {
    const { isOpen, hideModal } = this.props;
    return ReactDOM.createPortal(
      // Any valid React child: JSX, strings, arrays, etc.
      isOpen ? <div onClick={hideModal} className="bg-modal" /> : null,
      // A DOM element
      this.elm,
    );
  }
}

const mapStateToProps = state => ({
  isOpen: state.modal.isOpen,
});

BgModal.propTypes = {
  isOpen: PropTypes.bool,
  hideModal: PropTypes.func.isRequired,
};

BgModal.defaultProps = {
  isOpen: false,
};

export default connect(mapStateToProps, actions)(BgModal);
