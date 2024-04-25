import React from 'react';
import './Modal.css'; 
import { signUpSchema2 } from '../../schema/schema2'
import axios from 'axios';
import { useFormik } from 'formik';


const initialValues = {
    "firstName" : "",
    "lastName" : "",

};


const PartialUpdate = ({ isOpen, onClose, onSubmit, children }) => {
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

export default PartialUpdate ;