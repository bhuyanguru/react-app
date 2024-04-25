import React, { useState } from "react";
import axios from "axios";
import img6 from "../img/img6.jpg";
import { useFormik } from "formik";
import { partialUpdateScema } from "../schema/partialUpdateScema";
import "./booking.css";
import { useNavigate } from 'react-router-dom';




const initialValues = {
  firstName: "",
  lastName: "",
};
function PartialUpdate() {

    const navigate = useNavigate()

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: partialUpdateScema,

      onSubmit: async (values, action) => {
        try {
          const body = {
            firstname: values?.firstName,
            lastname: values?.lastName,
          };
          const headers = {
            "Content-Type": "application/json",
          };
          const response = await axios.patch("/booking/1", body, headers);
          console.log(response, "res");
            action.resetForm();
        } catch (error) {
            navigate(-1)
          console.log(error);
        }
      },
    });

  console.log(errors);

  return (
    <>
      <div className="container">
        <div className="img-container" id="img6" >
          <img src={img6} alt="" className="formImg" />
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

          
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default PartialUpdate;
