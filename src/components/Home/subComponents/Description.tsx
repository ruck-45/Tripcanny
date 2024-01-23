import React from 'react'

const Description = () => {
  return (
    <>
    <div className="bg-white h-auto md:h-[25rem] flex flex-col items-center justify-between md:items-start  md:justify-start px-[7rem] py-[14rem]">
      <div>
        <h1 className="md:text-5xl text-center text-2xl text-black font-bold font-serif"><span className="text-yellow-600">OUR</span> PRODUCTS</h1>
      </div>
      <div className="md:h-2.5 h-1 bg-black w-20 md:w-40 text-black"></div>
      <div className=" mt-8 text-center font-large text-black text-2xl md:text-3xl">
        <h2>We package the products with best services to make you a happy customer.</h2>
      </div>
    </div>
    </>
  )
}

export default Description