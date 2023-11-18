import React from "react";
import { PiShoppingCartSimple } from "react-icons/pi";

const OrderDash = () => {
  return (
    <>
      {/* Total Orders */}
      <div className="basis-1/4 bg-white m-3 p-3 rounded-xl">
        <div>
          <PiShoppingCartSimple className="w-10 h-10 text- rounded-full bg-blue-50 p-2 m-5" />
        </div>
        <div className="font-normal mx-5 font-mono text-4xl tabular-nums slashed-zero">
          1300
        </div>
        <div className="font-bold mt-2 mx-5 font-mono text-4xl">
          Total Orders
        </div>
        <span className="text-gray-800 mt-2 mx-5  font-thin">(In Last 7 Days)</span>
      </div>
      <div className="basis-1/4 bg-white m-3">hi</div>
      <div className="basis-1/4 bg-white m-3">hi</div>
      <div className="basis-1/4 bg-white m-3">hi</div>
    </>
  );
};

export default OrderDash;
