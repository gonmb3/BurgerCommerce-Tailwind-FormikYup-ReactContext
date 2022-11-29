

const FilterButtons = ({ filterItem, setFiltered, products }) => {
    return (
        <>

            <div className='w-full container flex justify-center flex-wrap gap-2 px-[5px]'>

                <button
                    onClick={() => setFiltered(products)}
                    className='bg-white text-red-600 hover:bg-slate-200  text-sm px-4 py-1 rounded '>
                    All
                </button>
             
                <button
                    onClick={() => filterItem("pizza")}
                    className='bg-white text-red-600 hover:bg-slate-200  text-sm px-4 py-1 rounded '>
                    Pizza
                </button>
                
                <button
                    onClick={() => filterItem("burger")}
                    className='bg-white text-red-600 hover:bg-slate-200  text-sm px-4 py-1 rounded '>
                    Burgers
                </button>

                <button
                    onClick={() => filterItem("drinks")}
                    className='bg-white text-red-600 hover:bg-slate-200  text-sm px-4 py-1 rounded '>
                    Drinks
                </button>

                <button
                    onClick={() => filterItem("hotdog")}
                    className='bg-white text-red-600 hover:bg-slate-200  text-sm px-4 py-1 rounded '>
                    Hot Dogs
                </button>

                <button
                    onClick={() => filterItem("snack")}
                    className='bg-white text-red-600 hover:bg-slate-200  text-sm px-4 py-1 rounded '>
                    Snacks
                </button>



            </div>


        </>
    )
}

export default FilterButtons