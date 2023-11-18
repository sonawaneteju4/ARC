import React, { useEffect } from "react";
import { BsList } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { BsBadgeArFill } from "react-icons/bs";

const TopNavbar = () => {
  useEffect(() => {
    
    const HandleLogOut = () => {
      sessionStorage.removeItem('token')
    };
    
  }, [])
  
  return (
    <div>
      <div className=" w-screen h-16 bg-slate-100 flex justify-between">
        <div className=" flex items-center">
          {/* side bar spreader and Brand Name */}
          <div className="text-4xl pl-5">
            <BsBadgeArFill />
          </div>
          <p className="text-xl pl-4">AR CUSTOMS</p>
        </div>
        <button
          className=" flex items-center cursor-pointer"
          onClick={HandleLogOut}
        >
          {/* side bar spreader and Brand Name */}
          <div className="text-xl ">
            <FiLogOut />
          </div>
          <p className="text-lg pl-1 pr-6">Log Out</p>
        </button>
      </div>
    </div>
  );
};

export default TopNavbar;
