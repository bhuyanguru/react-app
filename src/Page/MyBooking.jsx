import React, { useState } from 'react';
import './myBooking.css'; 
import DeleteModal from '../components/navbar/DeleteModal';
import img5 from '../img/booking.jpg'
import { Link } from 'react-router-dom';






function ActionButtonComponent() {


 const [isModalOpen, setModalOpen] = useState(false);
 const openModal = () => setModalOpen(true);
 const closeModal = () => setModalOpen(false);
 const submitModal = () => {
   console.log('Submitting...');
   closeModal();
 };

 const [isDelteModalOpen, setDeleteModalOpen] = useState(false);
 const openDeletModal = () => setDeleteModalOpen(true);
 const closeDeleteModal = () => setDeleteModalOpen(false);
 const submitDeleteModal = () => {
   console.log('Submitting...');
   closeDeleteModal();
 };

 const [isPartialModalOpen, setPartialModalOpen] = useState(false);
 const openPartialModal = () => setPartialModalOpen(true);
 const closePartialModal = () => setPartialModalOpen(false);
 const submitPartialModal = () => {
   console.log('Submitting...');
   closePartialModal();
 };





//   const handleDelete = () => {
//     console.log('Delete action triggered');
//     // Add your delete logic here
//   };

//   const handlePartialUpdate = () => {
//     console.log('Partial update action triggered');
//     // Add your partial update logic here
//   };

  return (
    <>
      <div className="main-container">
          <div className="lowerContent">
             <div className="imgContainer"><img src={img5} alt="Img" className="img5" /></div>
             <div className="personalDetail">
                <h2>Welcome Jimy</h2><br/>
                <p>Here is your Booking Id<strong> 256</strong></p>
                <p>You successfully booked the appointment for 24/04/2024</p><be/>
                <p>You have deposited fund  just keep patience , We will get back to you </p>
             </div>
          </div>
          <div className="action-buttons">
            <Link to ='/booking/updatebooking/edit' className="update-button" id="update">Update</Link>
            <button onClick={openDeletModal} className="update-button">Delete</button>
            <DeleteModal isOpen={isDelteModalOpen} setDeleteModalOpen={setDeleteModalOpen} onClose={closeDeleteModal} onSubmit={submitDeleteModal}><p>Confirm to delete the booking</p></DeleteModal>
            <Link to='/booking/updatebooking/partialupdate' className="update-button" id="update">Partial-Update</Link>
          </div>
         
       </div>
    </>
  );
}

export default ActionButtonComponent;