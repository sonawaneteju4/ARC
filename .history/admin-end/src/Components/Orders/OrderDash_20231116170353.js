import React from "react";
import { PiShoppingCartSimple } from "react-icons/pi";

const OrderDash = () => {
  return (
    <>
      {" "}
      <div className="basis-1/4 bg-white m-3">
        <div>
          <PiShoppingCartSimple className="w-0 h-10 rounded-full bg-blue-500"/>
        </div>
      </div>
      <div className="basis-1/4 bg-white m-3">hi</div>
      <div className="basis-1/4 bg-white m-3">hi</div>
      <div className="basis-1/4 bg-white m-3">hi</div>
    </>
  );
};

export default OrderDash;
