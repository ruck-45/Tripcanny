import React from 'react'

type cardsProps = {
    photo: string,
    title:string,
    des: string
}

const Card = (props:cardsProps) => {
  return (
    <div className='bg-white shadow-[0_0_10px_black] w-[20rem] h-[23rem] hover:scale-110 transition duration-150 ease-in-out'>
        <div className='flex flex-col items-center justify-center '>
        <div className='mt-6 w-[8rem] h-[8rem] p-[1rem]'>
            <img src={props.photo} alt="" />
        </div>
        <div className=' text-2xl font-medium text-center'>
            <h1>{props.title}</h1>
        </div>
        <div className=' text-large font-light text-center'>
            <h2>{props.des}</h2>
        </div>

        
    </div>
    </div>
  )
}

export default Card