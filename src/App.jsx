import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home'

import ProductDetails from './components/ProductDetails';
import Sidebar from './components/Sidebar';
import Signup from './components/Signup';
import Login from './components/Login';


const App = () => {
  return (
    <div className='overflow-hidden'>
    <Header/>
    <Routes>

      <Route path="/" element={<Home/>}/>

      <Route path="/product/:id" element={<ProductDetails/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      
    </Routes>

    <Sidebar/>

    <Footer/>

    </div>
  )
}

export default App