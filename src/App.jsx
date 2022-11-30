import { Route, Routes } from 'react-router-dom'

import Header from './components/Header';
import Home from './components/Home'
import ProductDetails from './components/ProductDetails';
import Sidebar from './components/Sidebar';
import Signup from './components/Signup';
import Login from './components/Login';

// protected routes
import ProtectedRoutes from './components/ProtectedRoutes';

//react toastify
import { ToastContainer } from 'react-toastify';
import Checkout from './components/Checkout';



const App = () => {
  return (
    <div className='overflow-hidden'>
      {/*toastify*/}
      <ToastContainer
      theme="dark"
      autoClose={500}
      position="bottom-right"
      style={{width:"180px", fontSize:"12px"}}
      />
           {/*header component*/}
       <Header/>
                 {/*routes*/}
          <Routes>

            <Route path="/" element={<ProtectedRoutes> <Home/> </ProtectedRoutes> }/>
            <Route path="/product/:id" element={<ProtectedRoutes>   <ProductDetails/> </ProtectedRoutes> }/>
            <Route path="/checkout" element={<ProtectedRoutes>   <Checkout/> </ProtectedRoutes> }/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            
          </Routes>

           {/*sidebar component*/}
        <Sidebar/>
    </div>
  )
}

export default App