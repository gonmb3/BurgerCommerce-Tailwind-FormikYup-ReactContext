import {  BsEyeFill } from "react-icons/bs"
import {FaPlus} from "react-icons/fa"

import { createSearchParams, Link } from "react-router-dom";
import { useCartContext } from "../contexts/CartContext";

const Product = ({ product }) => {
  // destructure product
  const { name, price, category, imgSrc, id } = product;

  // cart context
  const { addToCart, cart } = useCartContext();


  return (
    <div className="px-6">

      <div className='border  border-gray-200 cursor-pointer rounded h-[300px] group relative overflow-hidden transition '>
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <Link
              to={`/product/${id}`}
            >
              <img className="max-h-[160px] group-hover:scale-110 duration-300" src={imgSrc} alt={name} />
            </Link>
          </div>
        </div>

        <div className="absolute top-2 right-0  p-2 flex 
             items-center justify-center gap-y-2 text-white rounded opacity-100
             ">
          <button 
          onClick={() => addToCart(product, id)}
              className="flex justify-center items-center text-white w-8 h-8
                   bg-red-600  rounded-full mr-2 hover:scale-90 duration-300"> 
            {/* add to cart *******/}      
                <FaPlus color="white" size={22} /> 
             
          </button>
          <Link
            className="w-8 h-8 bg-white flex justify-center hover:scale-90 duration-300 items-center rounded-full text-gray-900 drop-shadow-xl"
            to={`/product/${id}`}>
            <BsEyeFill size={22} />
          </Link>
        </div>
      </div>
      <div className="">

        <div className="text-sm capitalize text-center  bg-red-600 text-white  font-bold p-1">
          {category}
        </div>
        <h2 className="font-semi-bold bg-slate-100 p-1 text-1xl text-center text-black">{name}</h2>
        <div className="font-bold rounded-b-md bg-red-600 text-2xl mb-10 text-center py-3 text-white ">
          ${parseFloat(price).toFixed(2)}
        </div>
      </div>
    </div>
  )
}

export default Product