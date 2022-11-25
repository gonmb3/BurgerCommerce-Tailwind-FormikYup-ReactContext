import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
//product provider
import { ProductProvider } from './contexts/ProductContext'
//sidebar provider
import { SidebarProvider } from './contexts/SidebarContext'
//cart provider
import { CartProvider } from './contexts/CartContext'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
        <CartProvider>
              <SidebarProvider>
                  <ProductProvider>
                        <App />
                  </ProductProvider>
            </SidebarProvider>
        </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
)
