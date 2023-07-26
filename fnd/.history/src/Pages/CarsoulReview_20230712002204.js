import React from "react";
import Slider from "react-slick";
import { BiUserCircle } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
const user = [
  { review: 4, content: "Headlight tint to yellow. Awesome work, other mods in process. Pics soon uploaded.", user: "Tejas" },
  { review: 5, content: "Excellent service! I highly recommend it. Will definitely come back for more.", user: "John" },
  { review: 3.5, content: "Good job overall, but took longer than expected. Satisfied with the outcome.", user: "Emily" },
  { review: 4.5, content: "Great attention to detail. They transformed my car into a masterpiece.", user: "Alex" },
  { review: 4.2, content: "Professional and skilled team. Impressed with their workmanship.", user: "Sophia" },
  { review: 4.8, content: "Outstanding service! They exceeded my expectations.", user: "Michael" },
  { review: 3.7, content: "Decent work, but customer service needs improvement.", user: "Emma" },
  { review: 4.6, content: "Highly skilled technicians. My car looks amazing.", user: "Daniel" },
  { review: 4.3, content: "Good value for money. Happy with the results.", user: "Olivia" },
  { review: 4.9, content: "Flawless execution. Will recommend to friends and family.", user: "William" },
  { review: 4.1, content: "Average service. Could have been better.", user: "Ava" },
  { review: 4.7, content: "They went above and beyond to make my car stand out.", user: "Mason" },
  { review: 4.4, content: "Friendly staff and great attention to detail.", user: "Ella" },
  { review: 3.9, content: "Fair job, but didn't fully meet my expectations.", user: "Liam" },
  { review: 4.5, content: "High-quality workmanship. I'm a satisfied customer.", user: "Isabella" },
  { review: 4.3, content: "Good overall experience. Will consider their services again.", user: "James" },
  { review: 4.8, content: "Top-notch service. They know what they're doing.", user: "Sophie" },
  { review: 4.2, content: "Pleased with the results. My car looks brand new.", user: "Benjamin" },
  { review: 4.6, content: "Prompt and efficient. They delivered on their promises.", user: "Charlotte" },
  { review: 4.4, content: "Impressive craftsmanship. Highly recommended.", user: "Henry" }
];


const CarsoulReview = () => {
  // const [value, setValue] = React.useState( <number | null>(2));
  var settings = {
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 800,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div>
    <Slider {...settings} data-slick='{"slidesToShow": 4, "slidesToScroll": 4}'>
      {user.map((review, index) => (
        <div key={index}>
          <div className="flex justify-center lg:mx-5 mx-5">
            <div className="block p-6 rounded-2xl shadow-2xl bg-slate-2000 max-w-sm">
              <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2 flex justify-center">
                <Box>
                  <Rating name="read-only" value={review.review} readOnly size="large" />
                </Box>
              </h5>
              <p className="text-gray-700 text-base mb-4">{review.content}</p>
              <p className="inline-block px-6 py-2.5 font-medium text-xs leading-tight uppercase rounded transition duration-150 ease-in-out">
                <span className="flex justify-center">
                  <BiUserCircle className="text-2xl" />
                  {review.user}
                </span>
              </p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  </div>
  );
};

export default CarsoulReview;