import { useEffect } from 'react';

function useEscKeyAction(action) {
  useEffect(() => {
    const executeActionOnEscKeydown = (event) => {
      if (event.keyCode === 27 && typeof action === 'function') {
        action();
      }
    };
    document.addEventListener('keydown', executeActionOnEscKeydown);

    return () => {
      document.removeEventListener('keydown', executeActionOnEscKeydown);
    };
  }, [action]);
}

export default useEscKeyAction;
