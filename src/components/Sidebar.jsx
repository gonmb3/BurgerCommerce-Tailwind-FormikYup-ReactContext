import { FaRegTrashAlt } from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io"
import { Link } from "react-router-dom";
import { useCartContext } from "../contexts/CartContext";

import { useSidebarContext } from "../contexts/SidebarContext"
import CartItem from './CartItem';


const Sidebar = () => {
  //sidebar context
  const { isOpen, handleClose } = useSidebarContext();
  //cart context
  const { cart, clearCart, total } = useCartContext();


  return (
    // sidebar open/close 
    <div className={`${isOpen ? "right-0" : "-right-full"} "w-full bg-gray-900 fixed top-0 
     h-screen shadow-2xl md:w-[40vw] xl:max-w-[30vw] w-[70vw] transition-all duration-300 z-20 px-4 " `}>

      <div className="flex items-center justify-between py-6 border-b">
        {/*items bag  *****/}
        <div className="uppercase text-sm  bg-red-600 p-1 rounded-md font-bold">Bag ({cart.length}) </div>
        {/*icon *****/}
        <div
          onClick={handleClose}
          className="cursor-pointer w-8 flex h-8 justify-center items-center ">
          <IoMdCloseCircleOutline size={30} />
        </div>
      </div>

      {/* empty cart condition*/}
      {
        cart.length === 0 ? (
          <div className="flex justify-center h-[200px] items-center">Empty Cart!</div>
        ) : (
          <>
            <div className=" flex flex-col gap-y-1 h-[480px] overflow-y-auto ">
              {
                cart.map(product => (
                  <CartItem product={product} key={product.id} />
                ))
              }
            </div>

            <Link to="/checkout">
            <div className="flex cursor-pointer justify-center items-center mt-5 p-2 bg-green-800 hover:bg-red-600 duration-300 w-[50%] mx-auto rounded-md">
                  <button className="text-[14px] ">CHECKOUT</button>
               </div>
            </Link>
              {/* total ******/}
            <div className="bg-white flex w-full justify-between items-center text-black rounded-full mt-10 ">   
              
              <div className="flex items-center">
                <span className="font-bold ml-2">Total:</span> <p className="font-bold ml-2 text-2xl">${parseFloat(total).toFixed(2)}</p>
              </div>

              <div className="cursor-pointer bg-red-600 hover:bg-red-700 text-white p-3 m-[1px] rounded-full ">
                <FaRegTrashAlt
                  onClick={() => clearCart()} />
              </div>
            </div>

          </>
        )
      }


    </div>
  )
}

export default Sidebar