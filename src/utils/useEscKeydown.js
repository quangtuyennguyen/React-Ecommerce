import { useCallback, useEffect } from 'react';

export default function useEscKeydown(callback) {
  const escFunction = useCallback(
    event => {
      if (event.keyCode === 27) {
        callback();
      }
    },
    [callback],
  );

  useEffect(() => {
    if (callback) {
      document.addEventListener('keydown', escFunction);
      return () => {
        document.removeEventListener('keydown', escFunction);
      };
    }
  }, [callback, escFunction]);
}
