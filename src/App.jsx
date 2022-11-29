import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Header from './components/Header';
import Home from './components/Home'

import ProductDetails from './components/ProductDetails';
import Sidebar from './components/Sidebar';
import Signup from './components/Signup';
import Login from './components/Login';

//react toastify
import { ToastContainer } from 'react-toastify';
import ProtectedRoutes from './components/ProtectedRoutes';


const App = () => {
  return (
    <div className='overflow-hidden'>
      {/*toastify*/}
      <ToastContainer
      theme="dark"
      autoClose={2000}
      position="bottom-right"
      />
           {/*header component*/}
       <Header/>
                 {/*routes*/}
          <Routes>

            <Route path="/" element={<ProtectedRoutes> <Home/> </ProtectedRoutes> }/>
            <Route path="/product/:id" element={<ProtectedRoutes>   <ProductDetails/> </ProtectedRoutes> }/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            
          </Routes>

           {/*sidebar component*/}
        <Sidebar/>
    </div>
  )
}

export default App