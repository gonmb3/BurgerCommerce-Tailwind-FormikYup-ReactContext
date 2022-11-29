import { useState } from 'react'; //react state

import { useAuthContext } from "../contexts/AuthContext" // auth context

import { useFormik } from "formik" /* ---- FORMIK*/

import { Link, useNavigate } from "react-router-dom" // react router dom

import * as Yup from "yup"               /* ---- YUP VALIDATION*/

import GoogleButton from 'react-google-button' // google button



const SignUp = () => {
  // auth context
  const {createUser} = useAuthContext();

  //react- router-dom hook
  const navigate = useNavigate();

  /*Validation Formik/Yup start -----------*/ /*   VALUES SCHEMA YUP  */
  const valuesSchema = Yup.object({
    name: Yup.string().min(3, "Min 3 characters").max(26, "Max. 26 characters").required("Please enter your name"),
    email: Yup.string().email("Email not valid").max(26, "Max. 26 characters").required("Please enter your email"),
    password: Yup.string().required("Please enter your password").min(6, "Min 6 characters").max(26, "Max. 26 characters"),
    password2: Yup.string().required("Please repit password").oneOf([Yup.ref("password"), null], "Password don´t matched").min(6, "Min 6 characters").max(26, "Max. 26 characters")
  })

  //initial values
  const initialValues = {
    name: "",
    email: "",
    password: "",
    password2: ""

  }

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } = useFormik({
    validationSchema: valuesSchema,
    initialValues,
    onSubmit: async (values, actions) => {
      // FIREBASE CREATE USER FUNCTION
        try { 
          await createUser(values.email, values.password)
          navigate("/")
          actions.resetForm();
        } catch (error) {
          console.log(error)
        }
    }
  })
 /*Validation Formik/Yup end -----------*/


  return (
    <div className='w-[100vw] h-screen flex justify-center  items-center '>

      { /* FORM SUBMIT*/}
      <form
        autoComplete="off"
        className='md:max-w-[400px]  text-white py-10  bg-gray-800 px-4 shadow-lg rounded-md border-2'
        onSubmit={handleSubmit}>

        <h6 className='text-white text-center text-2xl py-2 '>SIGN UP</h6>

        <div className="py-5 flex flex-col ">

          <div className='mb-5'>
          {errors.name && touched.name ?  <div className="text-[12px] text-red-600">{errors.name} </div> : ""}
            <input
              value={values.name}
              onBlur={handleBlur}
              onChange={handleChange}
              name='name'
              className={" w-full p-2 mt-1 rounded focus:outline-none text-gray-800 "}
              type="text"
              placeholder='Name' id='name' />

          </div>


          <div className='mb-5'>
          {errors.email && touched.email ?  <div className="text-[12px] text-red-600">{errors.email} </div> : ""}
            <input
              value={values.email}
              onBlur={handleBlur}
              onChange={handleChange}
              name='email'
              className={" w-full p-2 mt-1 rounded focus:outline-none text-gray-800 "}
              type="email"
              placeholder='Email' id='email' />

          </div>

          <div className='mb-5'>
          {errors.password && touched.password ? <div className="text-[12px] text-red-600">{errors.password} </div> : ""}
            <input
              value={values.password}
              onBlur={handleBlur}
              onChange={handleChange}
              name='password'
              className={" w-full p-2 mt-1 rounded focus:outline-none text-gray-800 "}
              type="password"
              placeholder="Password" id='password' />
          </div>

          <div className='mb-5'>

          {errors.password2 && touched.password2 ? <div className="text-[12px] text-red-600">{errors.password2} </div> : ""}
            <input
              value={values.password2}
              onBlur={handleBlur}
              onChange={handleChange}
              name='password2'
              className={" w-full p-2 mt-1 rounded focus:outline-none text-gray-800 "}
              type="password"
              placeholder="Repit password" id='password2' />
          </div>

          <div className="flex items-center justify-center  text-center">
            <input
              type="submit"
              value="SIGN UP!"
              className='hover:bg-red-700 text-center rounded w-full drop-shadow-md
                 p-2 px-3  cursor-pointer text-white uppercase font-medium
                 bg-red-600 transition-all '
            />
          </div>

          {/*GOOGLE BUTTON */}
          <div className="mx-auto mt-5 font-bold">
          <GoogleButton 
          type="dark"
          />
          </div>
        </div>

        {/*DONT HAVE ACCOUNT ???*/}
        <div className="">
          <p className="text-[14px]">
            <span className="text-[11px]"> Already have an account?</span> <Link to="/login" className="text-blue-500 ml-1 underline">LOGIN!</Link>
          </p>
        </div>
      </form>

    </div>
  )
}

export default SignUp