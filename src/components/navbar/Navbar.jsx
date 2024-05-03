import React, {useState} from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import $ from 'jquery';
import { useEffect } from "react";

const Navbar = () => {
  useEffect(() => {
    $('.logo1').fadeIn(2000);
    
    return () => {
      $('.logo1').fadeOut(2000);
    };
    
    
     
  }, []);

  // const [isLoggedIn, setIsLoggedIn] = useState(false);


  const token = localStorage.getItem('token');

 const handleRemove = ()=> localStorage.removeItem('token');


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
          {(token!=null)?(

              <Link to="/logIn" className="logIn" >
                LogIn
              </Link>
          ):(
              <Link to="/logIn"  onClick={handleRemove} className="logIn">
                Logout
              </Link>

          )}

        </div>
      </div>
       </>

  );
};

export default Navbar;
