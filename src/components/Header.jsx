import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'

import { useSidebarContext } from '../contexts/SidebarContext'

import { useCartContext } from '../contexts/CartContext'

import logo from "../assets/img/burger-logo.jpg"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { FiLogIn } from "react-icons/fi"

import { VscAccount } from "react-icons/vsc"

import { useEffect } from 'react';
import { useAuthContext } from '../contexts/AuthContext';


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

  //AUTH context USER 
  const { user, logout } = useAuthContext();

  // cart context
  const { itemAmount } = useCartContext();

  // usenavigate  hook router dom
  const navigate = useNavigate();

  // hhandle logout user
  const handleLogout = async () => {
    try {
      await logout();
      navigate("/")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <header className='fixed w-full z-10'>
      <div className={`${isActive ? "bg-gray-900" : " bg-red-600 "} w-full flex justify-between items-center h-[80px] md:px-20 px-5 z-10 duration-700`}>
        <Link to="/">
          <div className="flex flex-col items-center ">
            <img src={logo} alt="logo-img" className='w-[40px]' />
            <h4 className='font-bold text-white drop-shadow-lg uppercase md:text-[15px] text-[12px] mt-[-10px]'>Trutru Burgers</h4>
          </div>
        </Link>

        {/*cart */}
        <div className="flex relative gap-x-2 items-center" >

          <div className="">

            {/*if USER IS TRUE ? WELCOME (EMAIL) */}

            {user && <p className='text-[11px] mr-2'> <p className='text-center'>Welcome!</p> {user.email}</p>}
          </div>
          {/*if USER IS TRUE ? LOGOUT BUTTON */}

          {user ? <Link to="/">
                <button
                onClick={handleLogout}
                  className='text-[11px] text-red-600 hover:bg-gray-800 px-2 py-1 rounded-sm shadow-lg bg-white'>
                  LOGOUT
                </button>
              </Link>
            : (
              <Link to="/login">
                <VscAccount className="flex  md:mr-1  justify-center items-center cursor-pointer" size={26} />
              </Link>
            )}

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

