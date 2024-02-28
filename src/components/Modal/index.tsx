import React from 'react';
import { createPortal } from 'react-dom';
import './Modal.css';
import closeButton from '@assets/svg/close-button.png'

interface IModalProps {
  children:React.ReactNode;
}

const Modal = ({children}: IModalProps) => {
  return createPortal(  
    <React.Fragment>
      <div className='modal-container'>
        <div className="modal-content">
          <div className="modal-top">
            <button>
              <img src={closeButton} alt="close button" />
            </button>
          </div>
          <div className="modal-mid">
            {children}
          </div>
          <div className="modal-bottom"></div>
        </div>
      </div>
    </React.Fragment>, 
    document.getElementById("modal")!);
}

export default Modal;