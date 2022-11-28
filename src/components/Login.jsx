

import { useFormik } from "formik" /* ---- FORMIK*/
import { Link } from "react-router-dom"
import * as Yup from "yup"               /* ---- YUP VALIDATION*/

const Login = () => {

  /*Validation Formik/Yup start -----------*/ /*   VALUES SCHEMA YUP  */
  const valuesSchema = Yup.object({
    email: Yup.string().email("Email not valid").required("Please enter your email"),
    password: Yup.string().min(6, "Min 6 characters").max(26, "Max. 26 characters").required("Please enter your password"),
  })

  //initial values
  const initialValues = {
    email: "",
    password:"",
   
  }

  const { values, handleBlur, handleChange, handleSubmit, errors } = useFormik({
    validationSchema: valuesSchema,
    initialValues,
    onSubmit: (values, actions) => {
      actions.resetForm();
      console.log(values)
    }
  })



  return (
    <div className='w-[100vw] h-screen flex justify-center  items-center '>

     { /* FORM SUBMIT*/}
      <form
        autoComplete="off"
        className='md:max-w-[400px]  text-white py-10  bg-gray-800 px-4 shadow-lg rounded-md border-2'
        onSubmit={handleSubmit}>

          <h6 className='text-white text-center text-2xl py-2 '>LOGIN</h6>
      
        <div className="py-5 flex flex-col ">
     
          <div className='mb-5'>
          <div className="text-[12px] text-red-600">{errors.email} </div>
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
          <div className="text-[12px] text-red-600">{errors.password} </div>
            <input
              value={values.password}
              onBlur={handleBlur}
              onChange={handleChange}
              name='password'
              className={" w-full p-2 mt-1 rounded focus:outline-none text-gray-800 "}
              type="password"
              placeholder="Password" id='password' />
          </div>


          <div className="flex items-center justify-center  text-center">
            <input
              type="submit"
              value="LOGIN"
              className='hover:bg-red-700 text-center rounded w-full drop-shadow-md
                 p-2 px-3  cursor-pointer text-white uppercase font-medium
                 bg-red-600 transition-all '
            />
          </div>
        </div>
        {/*DONT HAVE ACCOUNT ???*/}
        <div className="">
          <p className="text-[14px]">
            <span className="text-[11px]"> Dont have an account? </span> <Link to="/signup" className="text-blue-500 ml-1 underline"> SIGN UP!</Link>
          </p>
        </div>
      </form>

    </div>
  )
}

export default Login