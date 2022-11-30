import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
//product provider context
import { ProductProvider } from './contexts/ProductContext'
//sidebar provider context
import { SidebarProvider } from './contexts/SidebarContext'
//cart provider context
import { CartProvider } from './contexts/CartContext'
//auth provider context
import { AuthProvider } from './contexts/AuthContext'

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
