import React from 'react'
import { useState, useEffect } from 'react';

const FilterButtons = ({ filterItem   }) => {
    return (
        <>
        
        <div className='w-full container flex justify-center flex-wrap gap-2'>
                        
                        <button
                            onClick={() => filterItem("burger")}
                            className='bg-white text-white bg-transparent border-2 hover:bg-red-600 px-4 py-1 rounded '>
                            Burgers
                        </button>
                        <button
                            onClick={() => filterItem("pizza")}
                            className='bg-white text-white bg-transparent border-2 hover:bg-red-600 px-4 py-1 rounded '>
                            Pizza
                        </button>
                        <button
                            onClick={() => filterItem("drinks")}
                            className='bg-white text-white bg-transparent border-2 hover:bg-red-600 px-4 py-1 rounded '>
                            Drinks
                        </button>

                        <button
                            onClick={() => filterItem("hotdog")}
                            className='bg-white text-white bg-transparent border-2 hover:bg-red-600 px-4 py-1 rounded '>
                            Hot Dogs
                        </button>

                        <button
                            onClick={() => filterItem("snack")}
                            className='bg-white text-white bg-transparent border-2 hover:bg-red-600 px-4 py-1 rounded '>
                            Snacks
                        </button>
                    
                </div>
           

        </>
    )
}

export default FilterButtons