import React from 'react';
import ReactModal from 'react-modal';

function Modal({ modalIsOpen, setIsOpen }) {
  return (
    <div>
      <ReactModal
        isOpen={modalIsOpen}
        contentLabel="Modal"
        ariaHideApp={false}
        onRequestClose={() => setIsOpen(false)}
      >
        <div className="modalContent">
          <h2>Employees created!</h2>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="button"
          >
            Close
          </button>
        </div>
      </ReactModal>
    </div>
  );
}

export default Modal;
