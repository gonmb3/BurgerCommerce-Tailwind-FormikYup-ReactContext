import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home'
import ProductDetails from './components/ProductDetails';
import Sidebar from './components/Sidebar';


const App = () => {
  return (
    <div className='overflow-hidden'>
    <Header/>
    <Routes>

      <Route path="/" element={<Home/>}/>
      <Route path="/product/:id" element={<ProductDetails/>}/>
      
    </Routes>

    <Sidebar/>
    <Footer/>

    </div>
  )
}

export default App