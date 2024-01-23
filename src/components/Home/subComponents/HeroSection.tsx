// Dependencies
import { RiCustomerServiceFill } from "react-icons/ri";
import { HiMiniBuildingOffice2 } from "react-icons/hi2";
import { FaArrowCircleRight } from "react-icons/fa";
import { TbCoins } from "react-icons/tb";
import { Button } from "@nextui-org/react";

// Local Files
import "./HeroSection.css";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="HeroSection flex flex-col justify-center items-center">
      <div className="flex flex-col justify-between items-center  gap-[3rem] w-[100%]  px-[12rem] py-[2rem] ">  
        <div className=" flex flex-col  items-center justify-between gap-5">
            <div className="text-yellow-400 font-bold text-7xl font-serif mb-4">
              <h1>Hunting For Used Car</h1>
            </div>
            <div className="flex flex-row items-center justify-between gap-6 mt-5">
              
            <div className="bg-yellow-400 hover:bg-white hover:text-yellow-400 py-3 px-6 rounded-full text-white text-2xl font-semibold font-serif">
              <Link to='/getReport'>Get Car Report</Link>
            </div>
            <div className="bg-yellow-400  hover:bg-white hover:text-yellow-400 rounded-full text-white py-3 px-6 text-2xl font-semibold font-serif">
              <Link to='/findUsedCar'>Find Used Car</Link>
            </div>
            </div>
            
        </div> 
      </div>
    </div>
  );
};

export default HeroSection;
