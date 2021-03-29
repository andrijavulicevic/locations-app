import { useEffect } from 'react';
import { createPortal } from 'react-dom';

const portalRoot = document.getElementById('portal');

const el = document.createElement('div');

function usePortal(children, key = null) {
  useEffect(() => {
    portalRoot.appendChild(el);

    return () => {
      try {
        portalRoot.removeChild(el);
      } catch (e) {
        // child has already been removed by unmounting containing component
      }
    };
  }, []);

  return createPortal(children, el, key);
}

export default usePortal;
