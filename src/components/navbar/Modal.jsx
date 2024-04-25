import React from 'react';
import './Modal.css'; 
import axios from 'axios';








const Modal = ({ isOpen, onClose, onSubmit, children }) => {


    
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <button onClick={onClose} className="close-button">&times;</button>
        </div>
        <div className="modal-body">
          {children}
        </div>
        <div className="modal-footer">
          <button onClick={onSubmit} className="submit-button">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;