import React from "react";
import { PiShoppingCartSimple } from "react-icons/pi";

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

      <div className="basis-1/4 bg-white m-3">hi</div>
      <div className="basis-1/4 bg-white m-3">hi</div>
      <div className="basis-1/4 bg-white m-3">hi</div>
    </>
  );
};

export default OrderDash;
