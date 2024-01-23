import React from 'react'

type cardProps={
  des:string
}

const Intro = (props:cardProps) => {
  return (
    <div className='h-[12rem] bg-yellow-400 flex flex-row items-center justify-center'>
      <div>
         <h1 className='text-bold text-4xl font-bold'>{props.des}</h1>
      </div>
    </div>
  )
}

export default Intro