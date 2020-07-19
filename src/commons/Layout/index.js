import PropTypes from 'prop-types';
import React from 'react';
import Button from '../../components/Button/Button';

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
      <Button />
    </div>
  );
}
