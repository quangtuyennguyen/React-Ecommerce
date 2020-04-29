import PropTypes from 'prop-types';
import React from 'react';

LayOut.propTypes = {
  children: PropTypes.element.isRequired,
  name: PropTypes.string,
};

LayOut.defaultProps = {
  name: '',
};

export default function LayOut({ children, name }) {
  return (
    <div className={name}>
      {children}
      <button
        type="button"
        className="btn-scroll-top u-center-text u-suggest"
        id="scrollToTop"
      >
        &#8593;
      </button>
    </div>
  );
}
