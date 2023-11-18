import React from "react";
import { PiShoppingCartSimple } from "react-icons/pi";
import { PiUsersThin } from "react-icons/pi";
import { BsClipboard2Data } from "react-icons/bs";
import { FaIndianRupeeSign } from "react-icons/fa6";
const OrderDash = () => {
  return (
    <>
      {/* Total Orders */}
      <div className="basis-1/4 bg-white m-3 p-3 rounded-xl">
        <div className="flex justify-center items-center h-10 w-10 rounded-full bg-blue-50 p-2 my-3 mx-5">
          <PiShoppingCartSimple className="" />
        </div>
        <div className="font-normal mx-5 font-mono text-4xl tabular-nums slashed-zero">
          1300
        </div>
        <div className="font-bold mt-2 mx-5 font-mono text-4xl">
          Total Orders
        </div>
        <small className=" mt-1 mx-5">(In Last 7 Days)</small>
      </div>
      {/*New Quotation */}
      <div className="basis-1/4 bg-white m-3 p-3 rounded-xl">
        <div className="flex justify-center items-center h-10 w-10 rounded-full bg-blue-50 p-2 my-3 mx-5">
          <BsClipboard2Data className="" />
        </div>
        <div className="font-normal mx-5 font-mono text-4xl tabular-nums slashed-zero">
          20
        </div>
        <div className="font-bold mt-2 mx-5 font-mono text-3xl">
          New Quotation Requests
        </div>
        <small className=" mt-1 mx-5">(Today)</small>
      </div>

      {/* Total Earning */}
      <div className="basis-1/4 bg-white m-3 p-3 rounded-xl">
        <div className="flex justify-center items-center h-10 w-10 rounded-full bg-blue-50 p-2 my-3 mx-5">
          <FaIndianRupeeSign className="" />
        </div>
        <div className="font-normal mx-5 font-mono text-4xl tabular-nums slashed-zero">
          1300
        </div>
        <div className="font-bold mt-2 mx-5 font-mono text-4xl">
          Total Orders
        </div>
        <small className=" mt-1 mx-5">(In Last 7 Days)</small>
      </div>
      {/* Total Users */}
      <div className="basis-1/4 bg-white m-3 p-3 rounded-xl">
        <div className="flex justify-center items-center h-10 w-10 rounded-full bg-blue-50 p-2 my-3 mx-5">
        <PiUsersThin />        </div>
        <div className="font-normal mx-5 font-mono text-4xl tabular-nums slashed-zero">
          5000+
        </div>
        <div className="font-bold mt-2 mx-5 font-mono text-4xl">
          Total Users
        </div>
      </div>{" "}
    </>
  );
};

export default OrderDash;
