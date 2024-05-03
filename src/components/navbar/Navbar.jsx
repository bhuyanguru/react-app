import React, {useEffect, useState} from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import $ from 'jquery';

const Navbar = () => {
  useEffect(() => {
    $('.logo1').fadeIn(2000);
    
    return () => {
      $('.logo1').fadeOut(2000);
    };
    
    
     
  }, []);


  const token = localStorage.getItem('token');

 const handleClicked = ()=> localStorage.removeItem('token');

useEffect(()=>{},[token])
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  return (
     <>

      <div className="main-div">
        <div className="logo">
          <div className="logo1">Bookings.com</div>
        </div>
        <div className="right_div">
          <Link to="/" className="home">
            Home
          </Link>
          <Link className="contact">Contact</Link>
          <Link className="about">About</Link>
          {(!token)?(

              <Link to="/logIn" className="logIn"   onClick={handleClicked}>
                LogIn
              </Link>
          ):(
              <Link to="/logIn"  onClick={handleClicked} className="logIn">
                Logout
              </Link>

          )}

        </div>
      </div>
       </>

  );
};

export default Navbar;
