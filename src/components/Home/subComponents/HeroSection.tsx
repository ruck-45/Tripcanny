// Dependencies

// Local Files
import "./HeroSection.css";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="HeroSection h-screen flex flex-col items-center">
      <div className="grid flex-col md:grid-cols-2 justify-center items-center p-[5rem] md:p-[10rem] ">
        <div className="text-yellow-400 font-bold text-5xl md:text-8xl font-serif mb-4">
          <h1>
            Planning Your Next Getaway <span className="text-white">?</span>
          </h1>
        </div>
        <div className="flex flex-col items-start gap-6 mt-[3rem]">
          <div className="bg-yellow-400 hover:bg-white hover:text-yellow-400 px-2 py-3 md:py-3 md:px-6  text-white text-xl md:text-2xl font-semibold font-serif">
            <Link to="/getReport">Book Flights</Link>
          </div>
          <div className="md:px-[0.3rem] px-[4rem]">
            <span className="text-white font-bold text-2xl md:text-4xl font-serif "> AND </span>
          </div>
          <div className="bg-yellow-400 hover:bg-white hover:text-yellow-400 px-2 py-3 md:py-3 md:px-6  text-white text-xl md:text-2xl font-semibold font-serif">
            <Link to="/findUsedCar">Grab Deals</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
