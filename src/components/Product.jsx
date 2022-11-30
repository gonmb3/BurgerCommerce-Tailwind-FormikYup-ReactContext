import { BsEyeFill } from "react-icons/bs"
import { FaPlus } from "react-icons/fa"
import {AiTwotoneStar} from "react-icons/ai"

import {  Link } from "react-router-dom";
import { useCartContext } from "../contexts/CartContext";

import { toast } from 'react-toastify';

const Product = ({ product }) => {
  // destructure product
  const { name, price, category, imgSrc, id , ratings} = product;

  // cart context
  const { addToCart } = useCartContext();


  return (
    <div className="px-4 pb-1 hover:scale-[104%] duration-300 ">

      <div className=' bg-slate-200 rounded-md cursor-pointer h-[130px] w-full group relative overflow-hidden transition '>

      <Link
            to={`/product/${id}`}
          >
        <div className="flex items-center h-full px-2">

        <span className="absolute top-4 left-20 z-1 text-white bg-red-600 px-[3px] rounded-md text-[18px] drop-shadow-md">
          ${parseFloat(price).toFixed(2)}
          </span>     
           <img className="h-[70px] w-[70px] object-contain group-hover:scale-110 duration-300" src={imgSrc} alt={name} /> 
        </div>
        </Link>

        <div className="absolute bottom-0 right-0 w-15  flex flex-col text-center gap-y-2 px-8 py-1 rounded-lg">
        <Link
            to={`/product/${id}`}
          >
          <span className="text-gray-700 drop-shadow-lg flex justify-end items-center  capitalize text-sm">
            {category} - {ratings}
            <AiTwotoneStar size={20} className=" text-yellow-600" /> 
            </span>

          <div className="flex  text-center">   {/* name   */}
            <span className=" uppercase  text-red-600">{name} </span>
           
          </div>
          </Link>
        </div>

        <div className="absolute top-0 right-0  p-2 flex 
             items-center justify-center gap-y-2 text-white rounded opacity-100
             ">
          <button
            onClick={() => addToCart(product, id, toast.success(`${name} added!`)) }
            className="flex justify-center  items-center text-white w-6 h-6
                   bg-red-600  rounded-full mr-2 hover:scale-95 duration-300 hover:bg-gray-600 focus:bg-green-700">
            {/* add to cart *******/}
            <FaPlus color="white"  />

          </button>
          <Link
            className="w-6 h-6 bg-white flex justify-center 
            hover:scale-95 duration-300 hover:bg-gray-300
             items-center rounded-full text-gray-900 drop-shadow-xl"
            to={`/product/${id}`}>
            <BsEyeFill  />
          </Link>
        </div>
     </div>



    </div>
  )
}

export default Product