import React, { useState, useEffect } from "react";
import { BsList } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { BsBadgeArFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const TopNavbar = () => {
  // const [isLogin, setisLogin] = useState(false);

  // useEffect(() => {
  //   const token = 
  //   setisLogin(!!token);
  // }, []);
  const navigate = useNavigate();
  const HandleLogOut = () => {
    sessionStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <div>
      <div className=" w-screen h-16 bg-slate-100 flex justify-between">
        <div className=" flex items-center">
          {/* side bar spreader and Brand Name */}
          <div className="text-4xl pl-5">
            <BsBadgeArFill />
          </div>
          <p className="text-xl pl-4">AR CUSTOMS</p>
          <p className="">Service</p>
          <p className="">Products</p>
          <p className="">Gallery</p>
          <p className="">Quotations</p>
        </div>
        {sessionStorage.getItem("token") && (
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
        )}
      </div>
    </div>
  );
};

export default TopNavbar;
