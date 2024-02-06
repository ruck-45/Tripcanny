import React from 'react'

import ppo from './assets/random.jpg'

const Specialization = () => {
  return (
    <div  className='bg-white h-auto md:h-[40rem] flex md:flex-row flex-col items-center justify-evenly border-black'>
      
        <div className='w-[43em] md:p-[5rem] px-[2rem] h-[25rem] bg-center cover'>
          <img className=' ' src={ppo} />
        </div>
        <div className='py-[4rem]  px-[2rem] h-auto'>
          <h1 className='md:text-5xl  text-2xl font-large font-serif '><span className='text-yellow-400'>WHO</span> IS CarFx</h1>
          <div className='h-[0.3rem] w-[12rem] bg-black '></div>
          
          <p className='text-1xl text-medium  font-serif md:mt-[2rem]'>"Welcome to CarFx, where your journey to quality,<br /> affordable pre-owned cars begins. Explore our meticulously curated inventory, <br />each vehicle meeting our high standards for reliability. <br />With transparent pricing and a commitment to customer satisfaction, <br />we make your car-buying experience smooth and enjoyable. <br /> Find your perfect ride with confidence at CarFx."
          </p>
          
        </div>
      </div>
    
  )
}

export default Specialization