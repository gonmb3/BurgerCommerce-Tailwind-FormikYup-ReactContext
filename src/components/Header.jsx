import { useState } from 'react';
import { Link } from 'react-router-dom'

import { useSidebarContext } from '../contexts/SidebarContext'

import { useCartContext } from '../contexts/CartContext'

import logo from "../assets/img/burger-logo.jpg"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { useEffect } from 'react';


const Header = () => {
    //header state
    const [isActive, setIsActive] = useState(true);
    
    useEffect(() => {
      window.addEventListener("scroll", () => {
        window.scrollY > 80 ? setIsActive(true) : setIsActive(false)
      })
    }, [])
      
  //sidebar context
  const { setIsOpen, isOpen } = useSidebarContext();
  // cart context
  const {itemAmount} = useCartContext();

  return (
    <header className='fixed w-full z-10'>
      <div className={`${isActive ? "bg-red-600" : "bg-black "} w-full flex justify-between items-center h-[80px] md:px-20 px-6 z-10 duration-700`}>
        <Link to="/">
          <div className="flex items-center gap-2">
            <img src={logo} alt="logo-img" className='w-[55px]' />
            <h4 className='font-bold text-white shadow-lg uppercase text-[16px]'>Trutru Burgers</h4>
          </div>
        </Link>

            {/*cart */}
        <div
          className="flex relative">
          <AiOutlineShoppingCart
            onClick={() => setIsOpen(!isOpen)}
            className='cursor-pointer' size={26} />    
            {/* amount badge*/}                                    
            <div className="bg-white text-black font-bold absolute -top-3 -right-4 w-[20px] h-[25px] text-center cursor-pointer  rounded-full">
              {itemAmount}
              </div>
        </div>

      </div>

      <div className="flex justify-center items-center bg-slate-50 p-2">
    
      </div>

    </header>
  )
}

export default Header

