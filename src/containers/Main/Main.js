import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

Main.propTypes = {
  children: PropTypes.element.isRequired,
};

export const Main = ({ children }) => {
  useEffect(() => {
    document.body.getAttribute('class') &&
      document.body.removeAttribute('class');
  });

  return (
    <main id="main" className="main">
      {children}
    </main>
  );
};
