import React from 'react'

import ppo from './assets/pc_layout.png'

const Specialization = () => {
  return (
    <div  className='bg-white lg:h-[35rem] md:h-[50rem] sm:h-[70rem] flex md:flex-row flex-col items-center justify-between border-black'>
      
        <div className='w-[43em] p-[5rem] h-[25rem]'>
          <img src={ppo} />
        </div>
        <div className='p-[5rem]'>
          <h1 className='text-3xl text-bold font-serif '>Who is Lighten</h1>
          <p className='text-1xl text-medium  font-serif mt-[2rem]'>It has survived not only five centuries, but also the leap into <br /> electronic typesetting, remaining essentially unchanged. It was <br /> popularised in the 1960s with the release of Letraset sheets <br />containing Lorem Ipsum.
          <br />
          Simply dummy text of the printing and typesetting industry <br />. Lorem Ipsum has been the industry's standard dummy text ever <br />since the 1500s, when an unknown printer took a galley of type <br />and scrambled it to make a type specimenbr
           book.
          </p>
        </div>
      </div>
    
  )
}

export default Specialization