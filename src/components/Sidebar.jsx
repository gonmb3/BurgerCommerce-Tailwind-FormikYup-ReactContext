import { FaRegTrashAlt } from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io"
import { useCartContext } from "../contexts/CartContext";

import { useSidebarContext } from "../contexts/SidebarContext"
import CartItem from './CartItem';


const Sidebar = () => {
  //sidebar context
  const { isOpen, handleClose } = useSidebarContext();
  //cart context
  const { cart, clearCart,total } = useCartContext();

  
  return (
    // sidebar open/close 
    <div className={`${isOpen ? "right-0" : "-right-full"} "w-full bg-[#0f0f0f] fixed top-0  h-screen shadow-2xl md:w-[40vw] xl:max-w-[30vw] w-full transition-all duration-300 z-20 px-4 lg:px-[35vw]" `}>

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

      <div className=" flex flex-col gap-y-1 h-[450px] overflow-y-auto ">
        {
          cart.map(product => (
            <CartItem product={product} key={product.id} />
          ))
        }
      </div>

      <div className="bg-white flex w-full justify-between items-center text-black rounded-full mt-10">

        {/* total */}
        <div className="flex items-center">
          <span className="font-bold ml-2">Total:</span> <p className="font-bold ml-2 text-2xl">${parseFloat(total).toFixed(2)}</p>
        </div>
        <div className="cursor-pointer bg-red-600 hover:bg-red-700 text-white p-3 m-[1px] rounded-full ">
          <FaRegTrashAlt
            onClick={() => clearCart()} />
        </div>
      </div>
    </div>
  )
}

export default Sidebar