import { useState } from 'react';
import { Link } from 'react-router-dom'

import { useSidebarContext } from '../contexts/SidebarContext'

import { useCartContext } from '../contexts/CartContext'

import logo from "../assets/img/burger-logo.jpg"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { useEffect } from 'react';


const Header = () => {
    //header state
    const [isActive, setIsActive] = useState(false);
    
    useEffect(() => {
      window.addEventListener("scroll", () => {
        window.scrollY > 200 ? setIsActive(true) : setIsActive(false)
      })
    }, [])
      
  //sidebar context
  const { setIsOpen, isOpen } = useSidebarContext();
  // cart context
  const {itemAmount} = useCartContext();

  return (
    <header className='fixed w-full z-10'>
      <div  className={`${isActive ? "bg-gray-900" : " bg-red-600 "} w-full flex justify-between items-center h-[80px] md:px-20 px-5 z-10 duration-700`}>
        <Link to="/">
          <div  className="flex flex-col items-center ">
            <img src={logo} alt="logo-img" className='w-[40px]' />
            <h4 className='font-bold text-white drop-shadow-lg uppercase text-[14px] mt-[-10px]'>Trutru Burgers</h4>
          </div>
        </Link>

            {/*cart */}
        <div
          className="flex relative" >
          <AiOutlineShoppingCart
            onClick={() => setIsOpen(!isOpen)}
            className='cursor-pointer' size={26} />    
            {/* amount badge*/}                                    
            <div className="bg-white text-black  absolute font-thin -top-3 -right-3 w-[20px] h-[20px] flex justify-center items-center text-center cursor-pointer  rounded-full">
              {itemAmount}
              </div>
        </div>

      </div>



    </header>
  )
}

export default Header

