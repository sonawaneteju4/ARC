import React from "react";
import { PiWarehouseFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import TopNavbar from "./TopNavbar";

const Index = () => {
  return (
    <div>
      {/* Top Nav Bar */}
      <TopNavbar/>
            {/* Side Bar */}
      <div className="w-1/5 bg-slate-50">
        <div className="flex items-center">
          <div className=" px-3">
            <PiWarehouseFill />
          </div>
          <div className="text-2xl">Inhouse Services</div>
        </div>
        <hr />
        <p className="pl-10">New Service Quote</p>
        <hr />
        <p className="pl-10">Open Services</p>
        <hr />
        <p className="pl-10">Closed Services</p>
        <hr />
        <p className="pl-10">Edit Services</p>

        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Index;
