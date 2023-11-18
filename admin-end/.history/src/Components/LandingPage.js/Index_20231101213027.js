import React from "react";
import { BsList } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div>
      {/* Top Nav Bar */}
      <div className=" w-screen h-16 bg-slate-100 flex justify-between">
        <div className=" flex items-center">
          {/* side bar spreader and Brand Name */}
          <div className="text-4xl pl-7">
            <BsList />
          </div>
          <p className="text-2xl pl-7">AR CUSTOMS</p>
        </div>
        <div className=" flex items-center">
          {/* side bar spreader and Brand Name */}
          <div className="text-4xl ">
            <FiLogOut />
          </div>
          <p className="text-2xl pl-3 pr-10">Log Out</p>
        </div>
      </div>
      {/* Side Bar */}
      <div className="w-1/5 bg-slate-50">
        <div>
          <p className="text-2xl">Inhouse Services</p>
        </div>
        <hr />
        <p>New Service Quote</p>
        <hr />
        <p>Open Services</p>
        <hr />
        <p>Closed Services</p>
        <hr />
        <p>Edit Services</p>

        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Index;
