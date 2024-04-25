import React from 'react';
import './Modal.css'; 
import axios from 'axios';


const DeleteModal = ({ isOpen, onClose, onSubmit, children,setDeleteModalOpen }) => {
  if (!isOpen) return null;

//   const headers = {
//     "Content-Type": "application/json", 
//     "Authorization": "Basic YWRtaW46cGFzc3dvcmQxMjM="
//   };

  const deleteItem = async () => {
    setDeleteModalOpen(false)
    try {
      const response = await axios.delete('/booking/1',{
        "Content-Type": "application/json", 
        "Cookie": "token=02b313c48af01cb"
      });
      console.log('Item deleted successfully', response.data);
    } catch (error) {
      console.error('There was an error deleting the item', error);
    }
  };


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
          <button onClick={deleteItem} className="submit-button">Confirm Delete</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;