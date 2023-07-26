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
// import { Carousel } from '../../lib';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 400);
  }, []);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="">
      {isLoading && <Spinner />}
      <div className=" lg:pt-10 pt-20  lg:pb-5 bg-auto " style={{background : `url("/image/bgbackmain.png")`}}>
        <StoreFront />
      </div>
      <div className="bg-gradient-to-r from-slate-50 via-slate-100 to-slate-200">
        <div className="pb-3 lg:mx-5 mx-0 ">
          <Feature />
        </div>

        <div className="bg-white pb-5 rounded-2xl mx-5">
          <span className="lg:text-5xl text-3xl flex justify-center font-bold p-10">
            <FcServices style={{color: "dodgerblue"}} />
            <span style={{color: "dodgerblue"}}>Services</span>
          </span>
          {/* Services */}
          <ServicesIndex />
        </div>
        <div className="pb-5 bg-gradient-to-r from-slate-50 via-slate-100 to-slate-200 flex flex-row">
         
          <div className="basis-3/5 bg-black">

          </div>

        </div>
        <div className="pb-5 bg-gradient-to-r from-slate-50 via-slate-100 to-slate-200">
          <Revies />
        </div>
        <div className="pt-5 pb-5 rounded-2xl mx-5 bg-white">
          <GoogleReviews />
        </div>
        
        <div className=" pb-5 pt-5  bg-gradient-to-r from-slate-50 via-slate-100 to-slate-200">
          <FAQ />
        </div>


        <div className="bg-white rounded-2xl mx-5 pt-5 pb-5">
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
