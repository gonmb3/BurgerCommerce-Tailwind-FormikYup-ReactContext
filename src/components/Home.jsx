import React from 'react'
import { useProductContext } from '../contexts/ProductContext'
import Product from './Product';
import Hero from './Hero';


const Home = () => {
    const {products} = useProductContext();

    const filteredProducts = products.filter(product => {
        return product.category === "burger" || product.category === "pizza" 
      })
       
  return (
    <>
    <Hero/>
        <section className='py-16 mt-20'>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-2 max-w-sm mx-auto md:max-w-none md:mx-0">
                    {
                        filteredProducts.map(product => (
                            <Product product={product} key={product.id} />
                        ))
                    }
                </div>
            </div>
        </section>
    </>
  )
}

export default Home