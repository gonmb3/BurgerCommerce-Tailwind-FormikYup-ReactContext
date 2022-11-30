import React from 'react'
import { useCartContext } from '../contexts/CartContext';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

import imgPaymants from "../assets/img/img-paymant.png"
import uruFlag from "../assets/img/uruguay-flag.jpg"
import { useState } from 'react';


const Checkout = () => {
    
    const [paymant, setPaymant] = useState(false)

    const { total, setCart, cart } = useCartContext();
    const shipping = 5;

    const navigate = useNavigate();

    const paymantSuccesAlert = () => {
        setPaymant(true)
        Swal.fire({
            position: 'center',
            width: "250px",
            icon: 'success',
            title: 'Payment Successful! Your Food Arrives Soon!',
            showConfirmButton: false,
            timer: 3000
        })
        setCart([])
        setPaymant(false)
}

 
    return (

        <div className='h-screen w-full flex justify-center items-center text-center z-20 '>

            <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0 shadow-lg text-black mx-2">
                <p className="text-xl font-medium text-black">Payment Details</p>
                <div className="">

                    <div className="relative mt-5">
                        <input type="text" id="card-holder" name="card-holder" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-2 text-sm  shadow-sm outline-none md:text-[13px] text-[11px] focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Full Name" />
                        <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24">
                                <path d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                            </svg>
                        </div>
                    </div>
                    <img src={imgPaymants} alt="img-paymant" className='w-[110px] h-5  object-cover my-2 ' />
                    <div className="flex gap-2">
                        <div className="relative w-7/12 flex-shrink-0">

                            <input type="text" id="card-no" name="card-no" className="w-full rounded-md border border-gray-200 px-2 py-3 pl-11 text-sm shadow-sm outline-none md:text-[13px] text-[11px] focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="xxxx-xxxx-xxxx-xxxx" />
                            <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                <svg className="h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z" />
                                    <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z" />
                                </svg>
                            </div>
                        </div>
                        <input type="text" name="credit-expiry" className="w-full rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none md:text-[13px] text-[11px] focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="MM/YY" />
                        <input type="text" name="credit-cvc" className="w-1/6 flex-shrink-0 rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none md:text-[13px] text-[11px] focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="CVC" />
                    </div>

                    <div className="flex flex-col sm:flex-row mt-5">
                        <div className="relative flex-shrink-0 sm:w-7/12">
                            <input type="text" id="billing-address" name="billing-address" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none md:text-[13px] text-[11px] focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Address" />
                            <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">

                                <img src={uruFlag} alt="uy-img-adress" className='w-7 r object-cover my-2 ' />
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 border-t border-b py-2">
                        <div className="flex items-center justify-between">
                            <p className="text-sm font-medium text-gray-900">Subtotal</p>
                            <p className="font-semibold text-gray-900">${parseFloat(total.toFixed(2))}</p>
                        </div>
                        <div className="flex items-center justify-between">
                            <p className="text-sm font-medium text-gray-900">Shipping</p>
                            <p className="font-semibold text-gray-900">${parseFloat(shipping.toFixed(2))}</p>
                        </div>
                    </div>
                    <div className="mt-6 flex items-center justify-between">
                        <p className="text-sm font-medium text-gray-900">Total</p>
                        <p className="text-2xl font-semibold text-gray-900">${parseFloat((total + shipping).toFixed(2))} </p>
                    </div>
                </div>
                <button
                    onClick={() => paymantSuccesAlert(setTimeout(() => {
                        navigate("/")
                    }, 3150)) }
                    className="mt-4 mb-8 w-full rounded-md bg-gray-900 hover:bg-red-600 duration-300 px-6 py-3 font-medium text-white">
                    Place Order
                </button>
            </div>
        </div>

    )
}

export default Checkout