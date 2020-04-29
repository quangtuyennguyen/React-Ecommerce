import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Root from './Root';

// Import Css
import './assets/css/vendor/all.css';
import './assets/css/styles.css';
import './assets/js/scroll-event.js';

ReactDOM.render(
  <Root>
    <App />
  </Root>,
  document.getElementById('root'),
);
