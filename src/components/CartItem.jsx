import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdAdd, IoMdRemove } from 'react-icons/io'
import { BsTrash } from "react-icons/bs"
import { useCartContext } from '../contexts/CartContext'

const CartItem = ({ product }) => {
    // destructure product
    const { id, imgSrc, name, amount, price } = product;

    //cart context
    const { removeFromCart , increaseAmount, decreaseAmount} = useCartContext();
    return (

        <div className=' border-b border-b-gray-100 pb-5'>

            <div className='flex items-center justify-between mt-5 '>
                {/* image ****/}
                <Link to={`product/${id}`}>
                    <div className=" flex items-cemter ">
                        <img src={imgSrc} alt="img-food" className='min-w-[80px] w-[80px] h-[70px] object-contain ' />
                    </div>
                </Link>

                {/* title ***/}
                <div className="">
                    <p className='text-sm uppercase font-bold max-w-[240px] text-primary  bg-white text-black p-1 rounded'>{name}</p>
                </div>

                {/*remove icon ****/}

                <div className="ml-5">
                    <BsTrash
                        onClick={() => removeFromCart(id)}
                        size={20} className='text-white hover:text-red-600 duration-200 cursor-pointer' />
                </div>
            </div>

            <div className="flex items-center justify-center gap-8 mt-[-9px]">
                {/* amount ****/}
                <div className="flex items-center  gap-2 ">
                
                    <IoMdRemove
                     onClick={() => decreaseAmount(id)}
                     className=' cursor-pointer ' />
                    <span className='bg-red-600 px-1 rounded'>{amount} </span>

                    { /*increase amount*/}
                    <IoMdAdd
                        onClick={() => increaseAmount(id)}
                        className='cursor-pointer' />

                    {/*  price X amount ****/}
                </div>
                <div className="font-bold flex  mx-[-10px]">
                ${parseFloat(price * amount).toFixed(2)}
                </div>
            </div>

         



        </div>


    )
}

export default CartItem

