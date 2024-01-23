import React from 'react'
import { Link } from 'react-router-dom'

type detailsProps ={
     des:string
}

const Footerhelper = (props:detailsProps) => {
  return (
    <div>
      <h1 className="text-large font-normal " >
         <Link to='/'>{props.des}</Link>
      </h1>
    </div>
  )
}

export default Footerhelper