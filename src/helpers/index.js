import { cssTransition } from 'react-toastify';

// Toastify configure
export const Zoom = cssTransition({
  exit: 'zoomOut',
  appendPosition: true,
});
