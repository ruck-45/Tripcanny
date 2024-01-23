// Local Files
import Card from "../../../globalSubComponents/Card";
import shop from '../../../globalAssets/icon/shop.jpg'
import sell from '../../../globalAssets/icon/sell.jpg'
import finance from '../../../globalAssets/icon/finance.jpg'
import maintaince from '../../../globalAssets/icon/maintance.jpg'
import report from '../../../globalAssets/icon/report.jpg'
import service1 from '../../../globalAssets/icon/service1.png'

// const allTitle :{
//   title1:"Fast service",
//   title2:"Secure payments",
//   title3:"Expert team",
//   title4:"Affordable services",
//   title5:"90 Days warranty",
//   title6:"Award winning"
// }



const Services = () => {
  return (
    <div className="bg-white md:h-[35rem] h-[100rem] w-full ">
      <div className="bg-white h-full  text-black md:mx-[8rem] mx-[2rem]  rounded-sm">
       <div className=" md:grid  md:grid-cols-3 md:gap-5 flex flex-col justify-between items-center gap-2">
         <Card photo={shop} title={"Shop Used Car"} des={"Discover a curated selection of top-notch used cars. Your dream ride awaits at unbeatable prices. Explore now!"} />
         <Card photo={report} title={"Get Vechile Report"} des={"Gain peace of mind with our comprehensive vehicle reports. Uncover the history, condition, and reliability of your next ride. Drive confidently, choose with assurance!"} />
         <Card photo={sell}title={"Sell Your Car"} des={"Turn your wheels into cash effortlessly! Sell your car hassle-free with us. Fast, fair, and stress-free transactions. Get your quote now!"} />
         <Card photo={maintaince} title={"Car Maintaince"} des={"Extend the life of your vehicle with our expert car maintenance service. From routine inspections to preventive care, we keep your ride running smoothly"} />
         <Card photo={finance} title={"Easy-Finance"} des={"Simplify your path to ownership with our easy finance solutions. Get behind the wheel hassle-free. Fast approvals, flexible terms – drive your dream car today!"} />
         <Card photo={service1} title={"Fast Service"} des={"Experience lightning-fast service for your vehicle needs. Our skilled team ensures quick and efficient solutions, getting you back on the road in no time. Speed meets quality at [Your Business Name]."} />
       </div>
    </div>
    </div>
  );
};

export default Services;
