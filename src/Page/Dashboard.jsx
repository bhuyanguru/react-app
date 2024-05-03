import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './dashboard.css'
import ModalUserDetails from "../components/ModalUserDetails";


const Dashboard= () => {
  const [data, setData] = useState([]);
  const [loading,setloading]=useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
          setloading(true)
        const response =await axios?.get("/booking");
        // const jsonData = await response.json();
        if(response){
            setData(response?.data);
            setloading(false)
        }

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

  }



  , []);

  const[showModal,setShowModal]=useState(false);

   const handleClicked =()=>{
       setShowModal(true);
   }


  return (
    <>
        {loading==false?
            <>
       < ModalUserDetails showModal={showModal} setShowModal={setShowModal}/>
      <div className="main-container">
           <div className="left-container">
             <h3 className='header'>All Appointments</h3>
             <Link to="/booking" className='booking'>
               Book Your AppointMent Here
             </Link>
             
           </div>
          
           <div className="card-container">
              
              <div className="card-container">
                {data.map((item) => (
                  <div key={item.bookingid} className="card">
                    <h2>{item.bookingid}</h2>
                    <button onClick={handleClicked} className='btn-details'>Deatails</button>
                  </div>
                ))}
              </div>
           </div>
      </div>
            </>
            :

            <h1 className='loading'>Loading...</h1>}
    </>
  );
};

export default Dashboard;
