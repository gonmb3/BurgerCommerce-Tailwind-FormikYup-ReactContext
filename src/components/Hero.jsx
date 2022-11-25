import React from 'react'

const Hero = () => {
  return (
    <section className=' h-[600px] relative '>
        <video className='w-[100vw] h-[700px] object-cover' autoPlay muted loop>
                 <source src="/src/assets/img/burger-video.mp4" type="video/mp4"/>
               
         </video>
       
         <div className="absolute w-full top-[55%]">
                <h2 className='text-center drop-shadow-lg md:text-6xl text-3xl uppercase font-bold text-red-600'>
                    Welcome to <span className='text-white font-bold '>TRUTRU BURGERS</span>!
                    <p className='text-white text-2xl drop-shadow-lg'>Best Food In Town</p>
                </h2>
              
        </div>
      
                 
    </section>
  )
}
export default Hero