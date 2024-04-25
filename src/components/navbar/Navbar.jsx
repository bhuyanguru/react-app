import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import $ from 'jquery';
import { useEffect } from "react";

const Navbar = () => {
  useEffect(() => {
    $('.logo1').fadeIn(1000);
    
    return () => {
      $('.logo1').fadeOut(1000);
    };
    
    
     
  }, []);


  return (
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
        <Link to="/logIn" className="logIn">
          LogIn
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
