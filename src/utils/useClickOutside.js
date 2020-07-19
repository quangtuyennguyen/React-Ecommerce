import { useEffect } from 'react';

export default function useClickOutside(refMain, refSub, callback) {
  const handleClick = ({ target }) => {
    if (refMain.current && !refSub.current.contains(target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
}
