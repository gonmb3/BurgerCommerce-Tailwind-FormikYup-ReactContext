import { createContext, useEffect, useState, useContext } from "react"
import {MenuItems} from "../assets/dataProducts"

const ProductContext = createContext();


const ProductProvider = ({children}) => {

  const [products, setProducts] = useState(MenuItems);


    return(
        <ProductContext.Provider
        value={{
          products,
             
        }}
        >
            {children}
        </ProductContext.Provider>
    )
}

export {ProductProvider}

export default ProductContext


export const useProductContext = () => {
    return useContext(ProductContext)
}

