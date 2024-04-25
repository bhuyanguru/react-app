import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './dashboard.css'


const Dashboard= () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response =await axios.get("/booking");
        // const jsonData = await response.json();
        setData(response.data);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
 



  return (
    <>
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
                    <Link key={item.bookingid} to ={`/details/${item.bookingid.toString()}`} className='btn-details'>Deatails</Link>
                  </div>
                ))}
              </div>
           </div>
      </div>
    </>
  );
};

export default Dashboard;
