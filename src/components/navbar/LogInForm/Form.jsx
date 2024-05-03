import React, { useState } from "react";
import axios from "axios";
import "./form.css";
import Dashboard from "../../../Page/Dashboard";
import img2 from "../../../img/formImg.jpg";
import { useFormik } from "formik";
import { signUpSchema } from "../../../schema/schema";
import { useNavigate } from 'react-router-dom';


const initialValues = {
  username: "admin",
  password: "password123"
};
function Form() {

  const navigate = useNavigate();

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,

      onSubmit: async (values, action) => {
        try {
          const body = {
            username: values?.username,
            password: values?.password,
          };
          const headers = {
            "Content-Type": "application/json", 
          };
          const response = await axios.post("/auth", body, headers);
          console.log(response,"res")
          localStorage.setItem("token", response?.data?.token);
        //   action.resetForm();
         if(response?.data?.token){
           navigate('/dashboard')
         }
           
        } catch (error) {
          console.log(error,'error');
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
              Username:
              <input
                name="username"
                type="text"
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
                className="input"
              />
            </label>
            {errors.name && touched.name ? (
              <p className="form-error">{errors.name}</p>
            ) : null}
            
            <br />
            <label>
              Password:
              <input
                name="password"
                type="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className="input"
              />
            </label>
            {errors.password && touched.password ? (
              <p className="form-error">{errors.password}</p>
            ) : null}
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Form;
