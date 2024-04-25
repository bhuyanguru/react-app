import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import profile from '../img/profile.webp'
import './details.css'


const Details = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/booking/1`);
        setPost(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);

  console.log(post,'details data')
  return (
    <>
      <div className="main-container1">
        <div className="container-img">
          <img src={profile} alt="" className="profile" />
        </div>
        <div className="container-details">
          <h1>Welcome Zimmy</h1>
          <p>You have an Booking on 25/04/2024</p>
          <p>You have paid 120</p>
          <p>You have ordered for dinner</p>
        </div>
      </div>
    </>  
  );
};

export default Details;
