import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

Main.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default function Main({ children }) {
  useEffect(() => {
    document.body.getAttribute('class') &&
      document.body.removeAttribute('class');
  });

  return (
    <main id="main" className="main">
      {children}
    </main>
  );
}
