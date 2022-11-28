import { useEffect } from "react";
import { useParams, useLocation, Link } from "react-router-dom"
import { useCartContext } from "../contexts/CartContext";
import { useProductContext } from "../contexts/ProductContext";
import {IoMdArrowRoundBack} from "react-icons/io"

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useProductContext();
  const { addToCart } = useCartContext();

  const {location} = useLocation();
  useEffect(() => {
      window.scrollTo(0,0)
  },[location])

  //get single product base on the id
  const product = products.find(item => {
    return item.id === parseInt(id)
  })


  const { name, price, description, imgSrc } = product;
  return (

    <section className="h-screen flex justify-center  items-center  py-20 ">
      <div className="container mx-auto relative ">

        <div className="flex flex-col lg:flex-row items-center pt-20  ">
        {/* image*/}
          <div className="flex flex-1 justify-center mb-8 lg:mb-0 ">
            <img className="md:max-w-[350px] max-w-[220px] floating" src={imgSrc} alt={name} />
          </div>

          <div className="flex-1 text-center lg:text-left ">
                <h1 className="md:text-[40px] text-[20px] bg-red-600 text-center rounded p-1 font-medium mb-2 md:max-w-[450px] max-w-[300px] mx-auto">
                  {name}
                </h1>
            <div className=" text-center  pt-2 ">
             <span className="md:text-4xl text-red-600 bg-white rounded px-2  text-2xl"> ${parseFloat(price).toFixed(2)}</span>
            </div>
            <p className="mt-2 text-[13px] text-white text-center font-thin px-5">{description} </p>

      {/* add to cart button */}
            <button 
            onClick={() => addToCart(product, product.id)}
            className="mt-4 bg-red-600 font-bold uppercase p-2  rounded hover:bg-red-800 mb-5">Add To Cart</button>
          </div>
        </div>


    <Link to="/">
      <div className="absolute top-5 hover:scale-90 duration-300  left-5 cursor-pointer drop-shadow-lg bg-gray-900 p-2  rounded-full ">
         <IoMdArrowRoundBack className="md:text-3xl text-2xl"  />
      </div>
      
    </Link>
      </div>

  
    </section>
  )
}

export default ProductDetails