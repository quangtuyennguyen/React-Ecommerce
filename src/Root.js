import React from 'react';
import { Provider } from 'react-redux';

import { store } from './storeConfigure';
export const Root = ({ children }) => <Provider store={store}>{children}</Provider>;