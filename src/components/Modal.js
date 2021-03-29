import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Transition } from '@headlessui/react';

import useEscKeyAction from '../hooks/useEscKeyAction';
import usePortal from '../hooks/usePortal';

const Modal = ({ isOpen, onClose, children }) => {
  useEscKeyAction(onClose);

  // to prevent parent scroll while modal is open
  useEffect(() => {
    function unlockScroll() {
      document.body.style.overflow = 'visible';
    }

    function lockScroll() {
      document.body.style.overflow = 'hidden';
    }

    if (isOpen) lockScroll();
    return () => {
      unlockScroll();
    };
  }, [isOpen]);

  return usePortal(
    <div
      className="fixed z-10 inset-0 overflow-y-auto p-0 flex items-center justify-center"
    >
      <Transition
        show={isOpen}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div
          className="fixed inset-0 transition-opacity"
          aria-hidden="true"
          data-testid="modal-backdrop"
        >
          <div className="absolute inset-0 bg-gray-500 opacity-75" />
        </div>

        <Transition
          show={isOpen}
          enter="ease-out duration-300"
          enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enterTo="opacity-100 translate-y-0 sm:scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 translate-y-0 sm:scale-100"
          leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        >
          <div
            className="inline-block bg-white rounded-sm text-left overflow-hidden shadow-md transform transition-all align-middle max-w-sm w-full p-6 md:max-w-7xl h-screen md:h-full lg:max-h-screen-90 overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <div className="absolute top-0 right-0 pt-5 pr-5 z-10">
              <button
                type="button"
                className="text-gray-500 hover:text-gray-500 focus:outline-none focus:text-gray-500 transition ease-in-out duration-150"
                aria-label="Close"
                onClick={onClose}
              >
                <span className="h-6 w-6">
                  <img src="/images/Close.svg" alt="close" className="opacity-60" />
                </span>
              </button>
            </div>
            <div className="m-0">{children}</div>
          </div>
        </Transition>
      </Transition>
    </div>,
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

export default Modal;
