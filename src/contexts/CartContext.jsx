import { createContext, useEffect, useState, useContext } from "react"
import {MenuItems} from "../assets/dataProducts"

const CartContext = createContext();


const CartProvider = ({children}) => {
    //cart state
  const [cart, setCart] = useState([]);

  // item amount state
  const [itemAmount, setItemAmount] = useState(0); 

  // cart total state
  const [total, setTotal] = useState(0); 

    // update item amount
    useEffect(() => {
      const total = cart.reduce((acc, currItem) => {
        return acc + currItem.price * currItem.amount
      }, 0)
      setTotal(total)
      
  })


  // update item amount
  useEffect(() => {
      if(cart){
        const amount = cart.reduce((acc, currItem) =>{
          return acc + currItem.amount
        },0)
        setItemAmount(amount)
      }
  },[cart])



  //add to cart
  const addToCart = (product,id) => {
      const newItem = {...product, amount: 1}

      const exist = cart.find(item => item.id === id);
      // if cart item is already in the cart
      if(exist){
        const newCart = [...cart].map(item => {
          if(item.id === id){
            return {...item, amount: exist.amount + 1}
          }else{
            return item
          }
        })
        setCart(newCart)
      }else{
        setCart([...cart,newItem])
      }
  }

  //remove from cart
  const removeFromCart  = (id) => {
      const newCart = cart.filter(item => item.id !== id);
      setCart(newCart)
  }
    //clear cart
     const clearCart = () => {
      setCart([])
     }

      //increase amount
      const increaseAmount = (id) => {
        	  const cartProduct = cart.find(item => item.id === id);
              addToCart(cartProduct, id)
      }
        //decrease amount
        const decreaseAmount = (id) => {
          const cartProduct = cart.find(item => item.id === id);
          if(cartProduct){
            const newCart = cart.map(item => {
              if(item.id === id){
                return {...item, amount: cartProduct.amount -1 }
              }else{
                return item
              }
            })
            setCart(newCart)
          }
            if(cartProduct.amount < 2){
              removeFromCart(id)
            }
          
    }



    return(
        <CartContext.Provider
        value={{
          cart,
          addToCart,
          removeFromCart,
          clearCart,
          increaseAmount,
          decreaseAmount,
          itemAmount,
          total
        }}
        >
            {children}
        </CartContext.Provider>
    )
}

export {CartProvider}

export default CartContext


export const useCartContext = () => {
    return useContext(CartContext)
}

