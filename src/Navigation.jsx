import React, { useEffect } from 'react'
import LandPage from "./Page/LandPage";
import {  Routes,  Route} from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import LogIn from './Page/LogIn';
import Dashboard from './Page/Dashboard';
import Booking from './Page/Booking';
import DetailsPage from './Page/DetailsPage';
import MyBooking from './Page/MyBooking';
import EditBooking from './Page/EditBooking';
import PartialUpdate from './Page/PartialUpdate'




const Navigation = () => {

  return (
    <>
     < Navbar/>
     <Routes>
       <Route path="/" element={<LandPage/>} />
       <Route path="/login" element={<LogIn/>} />
       <Route path="/dashboard" element={<Dashboard/>} />
       <Route path="/booking" element={<Booking/>} />
       <Route path="/details/:id" element={<DetailsPage/>} />
       <Route path="/booking/updatebooking" element={<MyBooking/>} />
       <Route path="booking/updatebooking/edit" element={<EditBooking/>} />
       <Route path="booking/updatebooking/partialupdate" element={<PartialUpdate/>} />
     </Routes>
   </>
  )
}

export default Navigation