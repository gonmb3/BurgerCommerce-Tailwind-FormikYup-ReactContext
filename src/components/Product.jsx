import { BsEyeFill } from "react-icons/bs"
import { FaPlus } from "react-icons/fa"

import { createSearchParams, Link } from "react-router-dom";
import { useCartContext } from "../contexts/CartContext";

const Product = ({ product }) => {
  // destructure product
  const { name, price, category, imgSrc, id , ratings} = product;

  // cart context
  const { addToCart, cart } = useCartContext();


  return (
    <div className="px-4 pb-1 hover:scale-[103%] duration-300  ">

      <div className=' bg-slate-200/90 rounded-md cursor-pointer h-[130px] w-full group relative overflow-hidden transition '>

      <Link
            to={`/product/${id}`}
          >
        <div className="flex items-center h-full px-2">
        <span className="absolute top-4 left-20 z-1 text-gray-900 text-2xl">${parseFloat(price).toFixed(2)} </span>
        
            <img className="h-[70px] w-[70px] object-contain group-hover:scale-110 duration-300" src={imgSrc} alt={name} />
         
        </div>
        </Link>

        <div className="absolute bottom-0 right-0 w-15  flex flex-col text-center gap-y-2 px-8 py-1 rounded-lg">
          <span className="text-gray-700 drop-shadow-lg  capitalize text-sm">{category} </span>

          <div className="flex  text-center">
            <span className=" uppercase  text-red-600">{name} </span>
           
          </div>

        </div>

        <div className="absolute top-0 right-0  p-2 flex 
             items-center justify-center gap-y-2 text-white rounded opacity-100
             ">
          <button
            onClick={() => addToCart(product, id)}
            className="flex justify-center items-center text-white w-8 h-8
                   bg-red-600  rounded-full mr-2 hover:scale-90 duration-300 hover:bg-gray-600">
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



    </div>
  )
}

export default Product