import PropTypes from 'prop-types';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './storeConfigure';

Root.propTypes = {
  children: PropTypes.element.isRequired,
};

export const Root = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);
