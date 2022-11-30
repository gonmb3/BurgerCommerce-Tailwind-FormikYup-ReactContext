import { useState } from 'react';
import { useProductContext } from '../contexts/ProductContext'
import Product from './Product';
import Hero from './Hero';
import FilterButtons from './FilterButtons';





const Home = () => {
    //products DATA
    const { products } = useProductContext();

    const [filtered, setFiltered] = useState(products)

    const filterItem = (itemCategory) => {
        const updateItems = products.filter((item) => {
            return item.category === itemCategory
        })
        setFiltered(updateItems)
    }


    return (
        <>
            <Hero />

            <section className='mt-5 h- ' >
                <h1 className='text-center pb-5 md:text-4xl text-2xl uppercase tracking-widest text-white'>Menú</h1>
                <div className="container mx-auto">

                    <FilterButtons filterItem={filterItem} products={products} setFiltered= {setFiltered}  />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-10 gap-2 mb-10  mx-auto md:max-w-none md:mx-0">
                        {
                            filtered.map(product => (
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