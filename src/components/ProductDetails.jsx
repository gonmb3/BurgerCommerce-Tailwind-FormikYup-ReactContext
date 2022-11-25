import { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom"
import { useCartContext } from "../contexts/CartContext";
import { useProductContext } from "../contexts/ProductContext";

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

    <section className="h-screen flex justify-center items-center bg-details pt-20">
      <div className="container mx-auto">

        <div className="flex flex-col lg:flex-row items-center  ">
        {/* image*/}
          <div className="flex flex-1 justify-center mb-8 lg:mb-0 ">
            <img className="md:max-w-[430px] max-w-[250px] floating" src={imgSrc} alt={name} />
          </div>

          <div className="flex-1 text-center lg:text-left ">
                <h1 className="md:text-[40px] text-[20px] bg-red-600 text-center rounded p-1 font-medium mb-2 md:max-w-[450px] max-w-[300px] mx-auto">
                  {name}
                </h1>
            <div className="text-4xl text-center font-bold pt-2 ">
              ${price}.00
            </div>
            <p className="mt-10 font-bold px-5">{description} </p>

      {/* add to cart button */}
            <button 
            onClick={() => addToCart(product, product.id)}
            className="mt-8 bg-red-600 font-bold uppercase p-2 rounded hover:bg-red-800">Add To Cart</button>
          </div>
        </div>
      </div>

    </section>
  )
}

export default ProductDetails