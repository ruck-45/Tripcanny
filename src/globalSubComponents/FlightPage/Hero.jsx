import React from "react";
import "./Hero.css"
import FlightBook from "./FlightBook";

const Hero = ({title}) => {
  return (
    <div className="Bg h-[20rem] ">
       <div className="flex flex-col items-center justify-center p-[8rem]  ">
        
          <h1 className="text-5xl font-bold  font-serif text-center text-white py-[0.5rem]">{title}</h1>
          <div className="h-[0.4rem] lg:w-[25rem] w-[15rem] bg-yellow-600  "></div>
        
    </div>    
     
    </div>
  );
};

export default Hero;
