import React, { useState, useEffect } from "react";
import { BsList } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { BsBadgeArFill } from "react-icons/bs";
import { NavLink, useNavigate } from "react-router-dom";
import { GoGear } from "react-icons/go";
import { FaOpencart } from "react-icons/fa";
import { IoImagesOutline } from "react-icons/io5";
import { MdOutlineFileCopy } from "react-icons/md";
import "./Navbar.css";
import { RxDashboard } from "react-icons/rx";

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
      <div className=" w-screen h-16 bg-gray-200 flex justify-between">
        <div className=" flex items-center">
          {/* side bar spreader and Brand Name */}
          <div className="text-4xl pl-5">
            <BsBadgeArFill />
          </div>
          {sessionStorage.getItem("token") && (
            <>
              <NavLink to="/" activeClassName="active" className="pl-5 flex">
                <RxDashboard className="mt-1 mx-1" />
                Dashboard
              </NavLink>
              <NavLink
                to="/service"
                activeClassName="active"
                className="pl-5 flex"
              >
                <GoGear className="mt-1 mx-1" />
                Service
              </NavLink>
              <NavLink
                to="/products"
                activeClassName="active"
                className="pl-5 flex"
              >
                {" "}
                <FaOpencart className="mt-1 mx-1" />
                Products
              </NavLink>
              <NavLink
                to="/gallery"
                activeClassName="active"
                className="pl-5  flex"
              >
                {" "}
                <IoImagesOutline className="mt-1 mx-1" /> Gallery
              </NavLink>
              <NavLink
                to="/quotations"
                activeClassName="active"
                className="pl-5 flex"
              >
                <MdOutlineFileCopy className="mt-1 mx-1" />
                Quotations
              </NavLink>
            </>
          )}
        </div>
        <div className=" flex items-center">
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
          <div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
