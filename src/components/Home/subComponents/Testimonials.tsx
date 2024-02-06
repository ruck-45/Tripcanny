//Dependencies
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Settings } from "react-slick";
import p1 from '../assets/lllll.png'


const reviews = [
  {
    name: "Sarah Thompson",
    designation: "Small Business Owner",
    rating: "⭐⭐⭐⭐⭐",
    photo:p1,
    comment:
    "I recently purchased a car from your dealership, and I couldn't be happier with the experience. The staff was friendly, knowledgeable, and made the entire process seamless. I love my new car and appreciate the excellent customer service!",
  },
  {
    name: "Alex Martin",
    designation: "Marketing Manage",
    rating: "⭐⭐⭐⭐⭐⭐",
    photo:p1,
    comment:
    "Overall, I had a good experience buying a car from your dealership. However, I noticed that the communication about the financing options could have been clearer. It would be helpful to provide more detailed explanations for first-time buyers like myself."
  },
  {
    name: " Emily Rodriguez",
    designation: "E-commerce Entrepreneur",
    rating: "⭐⭐⭐⭐",
    photo:p1,
    comment:
    "Kudos to your sales team! They were patient, answered all my questions, and helped me find the perfect car within my budget. The personalized service made the car-buying process enjoyable, and I highly recommend your dealership.",
  },
  {
    name: "James Harrison",
    designation: "Tech Startup Founder",
    rating: "⭐⭐⭐⭐⭐",
    photo:p1,
    comment:
    "I am thrilled with the quality of the car I purchased from your dealership. It exceeded my expectations, and I feel confident that I made a wise investment. Thank you for offering such well-maintained vehicles.",
  },
  {
    name: "Linda Cooper",
    designation: "Non-Profit Director",
    rating: "⭐⭐⭐⭐⭐",
    photo:p1,
    comment:
    "The paperwork process was surprisingly quick and efficient. I appreciated the transparency and felt like the team had my best interests in mind. Thank you for making the administrative part of buying a car so smooth!",
  },
  {
    name: "Chris Walker",
    designation: "Restaurant Owner",
    rating: "⭐⭐⭐⭐⭐",
    photo:p1,
    comment:
    "This is my second purchase from your dealership, and once again, I am impressed with the level of service. Your team consistently goes above and beyond to ensure customer satisfaction. I'll definitely be coming back for future car needs.",
  },
];

const Testimonials = () => {
  let arrows = true;

  if (window.innerWidth <= 645) {
    arrows = false;
  }

  var settings: Settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    className: "max-w-[65rem] mx-auto",
    focusOnSelect: true,
    arrows: arrows,
  };

  return (
    <div className="px-[1rem] sm:px-[3rem] py-[5rem] bg-white">
      <h1 className="font-serif text-bold text-[3rem] text-center mx-auto mb-[2rem] text-yellow-500">What People Says</h1>

      <Slider {...settings}>
        {reviews.map((data, index) => (
          <div className="px-[1rem]">
            <div className="bg-white rounded-3xl md:p-[2rem]  flex gap-[2rem]">
              <div className="w-[0.4rem] bg-[#191f22] rounded shrink-0"></div>
              <div className="flex flex-col gap-[1rem] ">
                <div>
                  <img src={p1} alt=""/>
                  <h1 className="text-xl font-bold">{data.name}</h1>
                  <p className="text-default-500 text-sm">{data.designation}</p>
                </div>
                
                
                <p className="italic">{data.comment}</p>
                
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;