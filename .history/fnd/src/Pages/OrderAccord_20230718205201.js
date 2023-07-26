import React, { useState } from "react";
import ShowImg from "./ShowImg";
import { NavLink } from "react-router-dom";

const OrderAccord = ({ oId, oderDate, gTotal, status, items, address }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="m-2">
      <div
        className="p-3 text-justify bg-gray-300 "
        onMouseEnter={() => setIsActive(!isActive)}
        onMouseLeave={() => setIsActive(!isActive)}
        key={oId}
      >
        <NavLink to={`/order/${oId}`} orderPlace={true}>
          <div className="flex justify-between">
            <div className="">
              <p className="mx-10"> Order Id: {oId.slice(-10)} </p>
              <p className="mx-10">
                {" "}
                Date: {new Date(oderDate).toLocaleString()}
              </p>
            </div>
            <div className="">
              <p className="mx-10">Total : {gTotal}</p>
              <p className="mx-10">Order Status : {status}</p>
            </div>
          </div>
        </NavLink>
      </div>
      {isActive && (
        <div className="px-3 bg-white/80 items-center odd:bg-white even:bg-white/50 ">
          <NavLink to={`/order/${oId}`} orderPlace={true}>
            <div className="flex flex-row">
              {items.map((item) => (
                <div className="basis rounded-2xl pt-4" key={item.productId}>
                  <ShowImg
                    productId={item.productId}
                    price={item.price}
                    quantity={item.quantity}
                  />
                </div>
              ))}
              <div className="m-3 bg-white/80 rounded-xl">
                <p>Address:</p>
                <p>Line 1: {address.line1}</p>
                <p>Line 2: {address.line2}</p>
                <p>City: {address.city}</p>
                <p>State: {address.state}</p>
                <p>Pincode: {address.pincode}</p>
              </div>
            </div>
          </NavLink>
        </div>
      )}
      <div></div>
    </div>
  );
};

export default OrderAccord;
