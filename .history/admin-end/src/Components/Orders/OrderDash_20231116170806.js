import React from "react";
import { PiShoppingCartSimple } from "react-icons/pi";

const OrderDash = () => {
  return (
    <>
      {/* Total Orders */}
      <div className="basis-1/4 bg-white m-3">
        <div>
          <PiShoppingCartSimple className="w-10 h-10 rounded-full bg-blue-50 p-2 m-5"/>
        </div>
        <div className="font-bold m-5 text-4xl proportional-nums slashed-zero">
            1300
        </div>
      </div>
      <div className="basis-1/4 bg-white m-3">hi</div>
      <div className="basis-1/4 bg-white m-3">hi</div>
      <div className="basis-1/4 bg-white m-3">hi</div>
    </>
  );
};

export default OrderDash;
