import React, { useEffect, useState } from "react";
import { FcServices } from "react-icons/fc";
// import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Revies from "../Pages/Revies";
import FAQ from "../Pages/FAQ";
import SectionUpdate from "../Pages/SectionUpdate";
import Feature from "../Pages/Feature";
import ServicesIndex from "../Pages/ServicesIndex";
import GoogleReviews from "../Pages/GoogleReviews";
import TrustedBy from "./TrustedBy";
import Location from "./Location";

import CarsouelMy from "../Pages/CarsouelMy";
import StoreFront from "../Pages/StoreFront";
import Spinner from "./Spinner";
import ServiceCarsoul from "../Pages/ServiceCarsoul";
// import { Carousel } from '../../lib';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const slides = [
    { image: '/image/car.jpg', caption: 'Slide 1' },
    { image: 'image/car.jpg', caption: 'Slide 2' },
    { image: 'image/car2.jpg', caption: 'Slide 3' },
  ];
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div>
      {isLoading && <Spinner isHomePage={true} />}
      <div
        className="lg:pt-10 pt-20 bg-cover bg-fixed"
        style={{ backgroundImage: `url("/image/Product/bgmain.png")` }}
        // style={{ backgroundImage: `url("/image/Product/bgmain.jpg")` }}
      >
        <StoreFront />
      </div>

      <div className="">
        <div className="pb-3 lg:mx-5 mx-0 ">
          <Feature />
        </div>

        <div className=" pb-5 rounded-2xl mx-0">
          <span className="lg:text-5xl text-3xl flex justify-center font-bold p-10">
            <FcServices style={{ color: "dodgerblue" }} />
            <span style={{ color: "dodgerblue" }}>Services</span>
          </span>
          {/* Services */}
          <ServicesIndex />

          <ServiceCarsoul slides={slides}/>
        </div>

        <div className="pb-5 pt-5  flex flex-row">
          <div className="basis-2/5 w-2/5 bg-white pb-5 mx-5 pt-5 ">
            <Revies />
          </div>
          <div className="basis-3/5 w-3/5 bg-white mx-5 pt-5 pb-5">
            <GoogleReviews />
          </div>
        </div>

        <div className=" pb-5 pt-5  ">
          <FAQ />
        </div>

        <div className=" rounded-2xl mx-5 pt-5 pb-5">
          <TrustedBy />
        </div>
        <div className="">
          <Location />
        </div>

        {/* Top To Page  */}
      </div>
    </div>
  );
};

export default Index;
