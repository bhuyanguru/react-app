import React, { useState } from "react";
import axios from "axios";
import img2 from "../img/bookingImg.jpg";
import { useFormik } from "formik";
import { signUpSchema2 } from "../schema/schema2";
import './booking.css'
import MyBooking from "./MyBooking";
import { useNavigate } from 'react-router-dom';



const initialValues = {
        "firstName" : "",
        "lastName" : "",
        "totalPrice" : '',
        "depositPaid" : '',
        "checkin" : "",
        "checkout" : "",
        "additionalneeds" : ""
};
function Booking() {



  const navigate = useNavigate()

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema2,

      onSubmit: async (values, action) => {
        try {
          const body = {
            firstname: values?.firstName,
            lastname: values?.lastName,
            totalprice:  values?.totalPrice,
            depositpaid : true,
            bookingdates : {
                checkin : "2018-01-01",
                checkout : "2019-01-01"
            },
            additionalneeds:values?.additionalneeds
          };
          const headers = {
            "Content-Type": "application/json", 
            'Accept': 'string'
          };
          const response = await axios.post("/booking",body,headers);
          console.log(response,"res")
        //   action.resetForm();
        } catch (error) {
          navigate('/booking/updatebooking')
          console.log(error);
        }
      },
    });

  console.log(errors);

  return (
    <>
      <div className="container">
        <div className="img-container">
          <img src={img2} alt="" className="formImg" />
        </div>
        <div className="form-container">
          <form onSubmit={handleSubmit} className="form">
            <h1>Welcome</h1>
            <label>
              First Name
              <input
                name="firstName"
                type="text"
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                className="input"
              />
            </label>
            {errors.firstName && touched.firstName ? (
              <p className="form-error">{errors.firstName}</p>
            ) : null}
            
            <label>
               Last Name
              <input
                name="lastName"
                type="text"
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                className="input"
              />
            </label>
            {errors.lastName && touched.lastName ? (
              <p className="form-error">{errors.lastName}</p>
            ) : null}
 
             <label>
               Total Price
              <input
                name="totalPrice"
                type="number"
                value={values.totalPrice}
                onChange={handleChange}
                onBlur={handleBlur}
                className="input"
              />
            </label>
            {errors.totalPrice && touched.totalPrice ? (
              <p className="form-error">{errors.totalPrice}</p>
            ) : null}

  
              <label>
               Deposite Paid (yes/no)
              <input
                name="depositPaid"
                type="text"
                value={values.depositPaid}
                onChange={handleChange}
                onBlur={handleBlur}
                className="input"
              />
            </label>
            {errors.depositPaid && touched.depositPaid ? (
              <p className="form-error">{errors.depositPaid}</p>
            ) : null}

            
               <label>
              Check In
              <input
                name="checkin"
                type="Date"
                value={values.checkin}
                onChange={handleChange}
                onBlur={handleBlur}
                className="input"
                id="time"
              />
            </label>
            {errors.checkin && touched.checkin ? (
              <p className="form-error">{errors.checkin}</p>
            ) : null}


            <label>
              Check Out
              <input
                name="checkout"
                type="Date"
                value={values.checkout}
                onChange={handleChange}
                onBlur={handleBlur}
                className="input"
                id="time"
              />
            </label>
            {errors.checkout && touched.checkout ? (
              <p className="form-error">{errors.checkout}</p>
            ) : null}





            <label>
              Additional Needs
              <input
                name="additionalneeds"
                type="text"
                value={values.additionalneeds}
                onChange={handleChange}
                onBlur={handleBlur}
                className="input"
              />
            </label>
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Booking;
