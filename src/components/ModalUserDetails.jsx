import React from 'react';
// import './Modal.css';
import axios from 'axios';



const ModalUserDetails = ({ showModal,setShowModal }) => {
const handleClose = () => {
    setShowModal(false)
}


    if (!showModal) return null;

    return (
        <>

        {showModal==true?
        <div className="modal-overlay" >
            <div className="modal-content" >
                <div className="modal-header">
                    <button  className="close-button" onClick={handleClose}>&times;</button>
                </div>
                <div className="modal-body">
                    <h1>Wecome Jimmy</h1>
                    <p>Your booking date is 03/05/2024</p>
                    <p>Your Booking id 256</p>
                </div>
                <div className="modal-footer">
                    <button  onClick={handleClose} className="submit-button">Close</button>
                </div>
            </div>
        </div>:null}
        </>
    );

};

export default ModalUserDetails;
