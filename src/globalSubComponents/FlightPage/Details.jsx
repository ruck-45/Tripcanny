import React from "react";
import lin from './assets/lin.jpg'
import bus from "./assets/business.jpg"

const Details = ({title, description,businessDes}) => {
  return (
    <>
      <div className="flex flex-col justify-between items-center bg-white h-auto p-[2rem]">
        <div className="p-[2rem]">
          <h1 className="md:text-5xl text-3xl font-bold font-serif">{title}</h1>
          <div className="h-[0.2rem] lg:w-[25rem] w-[15rem] bg-yellow-600"></div>
        </div>

        <div className="flex lg:flex-row flex-col justify-center items-center h-auto ">
          <div className="p-[2rem] bg-center bg-cover md:block hidden">
            <img className=" bg-center bg-cover" src={lin} alt="" />
          </div>
          <div>
            <h2 className="lg:px-[3rem] p-[1rem] font-serif font-bold text-yellow-600 text-3xl">{title}</h2>
            <p className="lg:px-[3rem] p-[1rem] font-serif text-gray-600 font-normal">{description}</p>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col justify-center items-center h-auto p-[3rem] border-2 ">
          <div>
            <h2 className="md:px-[1rem] text-3xl font-bold font-serif text-yellow-600">Business Class</h2>
            <p className="md:px-[1rem] h-auto text-start font-serif font-normal text-gray-600 py-[1rem]">
              {businessDes}
            </p>
          </div>
          <div className="p-[2rem] bg-center bg-cover md:block hidden">
            <img className=" bg-center bg-cover" src={bus} alt="" />
          </div>
        </div>
      </div>
      <div className="flex flex-col  items-start justify-start gap-6 px-[4rem] bg-white h-auto w-auto ">
        <div className="flex flex-col items-start justify-center md:px-[2rem] ">
          <h2 className="text-3xl font-serif font-bold ">
            Why Book with <span className="text-yellow-600">TripCanny</span>
          </h2>
          <div>
            <ul className="list-disc text-1xl text-gray-600 font-serif font-normal px-[2rem] py-[1rem]">
              <li>Best Prices GUARANTEED</li>
              <li>Fast, Easy & Secure Reservations</li>
              <li>24/7 Booking Assistance</li>
              <li>Exclusive Deals</li>
              <li>Best service guaranteed</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start justify-center md:px-[2rem] ">
          <h2 className="text-3xl font-serif font-bold ">
            Airlines typically offer several <span className="text-yellow-600">Classes</span>
          </h2>
          <div>
            <ul className="list-disc text-1xl text-gray-600 font-serif font-normal px-[2rem] py-[1rem]">
              <li>
                <span className="font-bold font-serif text-black">Economy Class:</span> Also known as coach or standard
                class, this is the basic class of service offered by airlines.
              </li>
              <li>
                <span className="font-bold font-serif text-black">Premium Economy Class:</span> This class offers more
                space, comfort, and amenities compared to economy class, but at a lower price point than business class
              </li>
              <li>
                <span className="font-bold font-serif text-black">Business Class:</span> Business class provides a
                higher level of comfort, service, and amenities compared to economy class.
              </li>
              <li>
                <span className="font-bold font-serif text-black">First class:</span> is the most luxurious class of
                service offered by airlines. Passengers in first class typically enjoy the highest level of comfort and
                service, with amenities
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start justify-center md:px-[2rem] ">
          <h2 className="text-3xl font-serif font-bold ">
            {title} In-Flight Amenities <span className="text-yellow-600">Amenities</span>
          </h2>
          <div>
            <ul className="list-disc text-1xl text-gray-600 font-serif font-normal px-[2rem] py-[1rem]">
              <li>
                Domestic aircraft’s have a provision of seat-back entertainment systems with a wide range of music, TV
                and movies to choose from
              </li>
              <li>Passengers can also enjoy the Audio-Video on demand (AVOD) along with a great selection of games.</li>
              <li>
                Free messaging service, including WhatsApp and Facebook messenger is provided in the airlines WiFi
                enabled flights.
              </li>
              <li>
                The inflight food service offers a complimentary multi-course meal including a great selection of house
                wine, free beer and bottled water.
              </li>
              <li>New inflight cabins have more spacious overhead bins, more power outlets and new carpets</li>
              <li>
                Passenger can enjoy a mood lighting system, which is a newly introduced feature enabling them to adjust
                the lighting as per the need and mood.
              </li>
              <li>
                Flyers have the opportunity to earn mileage points through Endeavor Airlines SkyMiles and SkyBonus
                programs and enjoy some great perks by redeeming the points earned.
              </li>
              <li>
                Access to lounges known as Sky Club at prominent city airports like Boston, Dallas, Chicago, and New
                York among others.
              </li>
              <li>
                Welcomes pets and offers emotional support animals onboard on a special request with no extra charges.
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start justify-center md:px-[2rem]">
          <h2 className="text-3xl font-serif font-bold  ">
            Make Your Travel Easier With <span className="text-yellow-600">TripCanny</span>
          </h2>
          <div>
            <ul className="list-disc text-1xl text-gray-600 font-serif font-normal px-[2rem] py-[1rem]">
              <li>Track & manage your itineraries</li>
              <li>Get access to App only exclusive fares</li>
              <li>Receive special Promo Codes & Discount</li>
              <li>Plan, book and manage your travel on the go with our Travel App</li>
              <li>Search thousands of fares to your preferred destination</li>
              <li>Book the lowest Flight</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
