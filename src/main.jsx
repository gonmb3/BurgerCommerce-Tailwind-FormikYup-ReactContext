import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
//product provider context
import { ProductProvider } from './context/ProductContext'
//sidebar provider context
import { SidebarProvider } from './context/SidebarContext'
//cart provider context
import { CartProvider } from './context/CartContext'
//auth provider context
import { AuthProvider } from './context/AuthContext'

// ract toastyfy
import 'react-toastify/dist/ReactToastify.css';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthProvider>
        <CartProvider>
              <SidebarProvider>
                  <ProductProvider>
                        <App />
                  </ProductProvider>
            </SidebarProvider>
        </CartProvider>
    </AuthProvider>    
    </BrowserRouter>
  </React.StrictMode>
)
