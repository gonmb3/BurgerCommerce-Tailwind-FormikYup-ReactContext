import React from 'react'

const Hero = () => {
  return (
    <section className=' h-[50vh] relative hero-bg ' id='home'>
      <div className="absolute w-full top-[45%] px-5 ">
        <h2 className='text-center drop-shadow-md md:text-6xl text-4xl uppercase font-bold text-red-600 '>
          Welcome to <span className='text-white font-bold md:text-7xl '> BURGERS</span>!
         <div className="md:max-w-[300px] max-w-[220px] shadow-lg mx-auto">
         <p className='text-white md:text-2xl text-[15px] drop-shadow-lg bg-red-600 md:p-1 p-0 rounded-md mt-5 '>Best Food In Town</p>
         </div>
        </h2>
      </div>
    </section>
  )
}
export default Hero