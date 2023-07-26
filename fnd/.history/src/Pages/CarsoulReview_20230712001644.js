import React from "react";
import Slider from "react-slick";
import { BiUserCircle } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
const user = [
  {review  :  4, content :"  Headlight tint to yellow Awesome work, other mods on process,pics soon uploaded" , user:"Tejas"},
  {review  :  4, content :"  Headlight tint to yellow Awesome work, other mods on process,pics soon uploaded" , user:"Tejas"},
  {review  :  4, content :"  Headlight tint to yellow Awesome work, other mods on process,pics soon uploaded" , user:"Tejas"},
  {review  :  4, content :"  Headlight tint to yellow Awesome work, other mods on process,pics soon uploaded" , user:"Tejas"},
  {review  :  4, content :"  Headlight tint to yellow Awesome work, other mods on process,pics soon uploaded" , user:"Tejas"},
  {review  :  4, content :"  Headlight tint to yellow Awesome work, other mods on process,pics soon uploaded" , user:"Tejas"},
  {review  :  4, content :"  Headlight tint to yellow Awesome work, other mods on process,pics soon uploaded" , user:"Tejas"},
  {review  :  4, content :"  Headlight tint to yellow Awesome work, other mods on process,pics soon uploaded" , user:"Tejas"}
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
      <div>
        <Slider
          {...settings}
          data-slick='{"slidesToShow": 4, "slidesToScroll": 4}'
        >
          <div>
            <div className="flex justify-center lg:mx-5 mx-5">
              <div className="block p-6 rounded-2xl shadow-2xl bg-slate-2000 max-w-sm">
                <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2 flex justify-center">
                  <Box>
                    <Rating name="read-only" value={user.} readOnly size="large" />
                  </Box>
                </h5>
                <p className="text-gray-700 text-base mb-4">
                  Headlight tint to yellow Awesome work, other mods on
                  process,pics soon uploaded .....
                </p>

                <p className=" inline-block px-6 py-2.5  font-medium text-xs leading-tight uppercase rounded  transition duration-150 ease-in-out">
                  <span className="flex justify-center">
                    <BiUserCircle className="text-2xl" />
                    customize_gkl
                  </span>
                </p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default CarsoulReview;
