import React from 'react'

const Hero = () => {
  return (
    <section className=' h-[90vh] relative hero-bg '>
      <div className="absolute w-full top-[45%]">
        <h2 className='text-center drop-shadow-lg md:text-6xl text-4xl uppercase font-bold text-red-600 '>
          Welcome to <span className='text-white font-bold md:text-7xl  '>TRUTRU BURGERS</span>!
         <div className="max-w-[340px] shadow-lg mx-auto">
         <p className='text-white md:text-3xl text-2xl drop-shadow-lg bg-red-600 p-2 rounded-md mt-5 '>Best Food In Town</p>
         </div>
        </h2>

      </div>
    </section>
  )
}
export default Hero