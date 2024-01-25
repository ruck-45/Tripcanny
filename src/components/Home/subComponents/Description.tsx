import React from 'react'
import Product from './Product'
import AllProduct from './AllProduct'
import p1 from '../assets/used.jpg'
import p2 from '../assets/new.jpg'
import ServiceImage from './ServiceImage'



const Description = () => {

  let miniWidth = 400;

  if (window.innerWidth <= 768) {
    miniWidth = 800;
  }
  return (
  <>
  <div className="bg-white md:h-[65rem] h-auto flex flex-col items-center justify-center py-[15rem] gap-5">
     <div className='md:mt-[8rem]'>
       <h1 className="md:text-5xl md:mt-[5rem] text-center text-2xl text-black font-bold font-serif"><span  className="text-yellow-600">OUR</span> PRODUCTS</h1>
       <div className="md:h-[0.3rem] h-1 bg-black w-20 md:w-40 text-white  mx-[23rem] "></div>
     </div>
     <div className=" text-center font-large text-gray-600 md:text-[1.2rem] text-1xl p-[1rem]">
       <h2>We package the products with best services to make you a happy customer.</h2>
      </div>
     <div className="flex flex-col md:flex-row bg-white ">
       <ServiceImage className="seo" textSize="3rem"  width={800} image={p1}  state={{id: 2}}/>
       <ServiceImage className="smm" textSize="3rem" width={800} image={p2}  state={{id: 2}}/>
     </div>

    <div>
   
      
  </div>
</div>
</>
  )
}

export default Description