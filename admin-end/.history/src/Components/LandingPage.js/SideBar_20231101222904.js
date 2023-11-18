import React from "react";
import { PiWarehouseFill } from "react-icons/pi";


const SideBar = () => {
  return (
    <div>
      {" "}
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

export default SideBar;
