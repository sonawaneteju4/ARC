import React, { useState } from "react";
import ShowImg from "./ShowImg";
import { NavLink } from "react-router-dom";

const OrderAccord = ({ oId, oderDate, gTotal, status, items }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div onMouseEnter={() => setIsActive(!isActive)} onMouseLeave={() => setIsActive(!isActive)}>
      <div className="p-3 my-2 text-justify bg-gray-300 "  key={oId} >
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
        <NavLink to={`/order/${oId}`} orderPlace={true}>
          <div className="flex bg-white/80 items-center  ">
            {items.map((item) => (
              <div className="h-56 rounded-2xl pt-4 m-3" key={item.productId}>
                <ShowImg
                  productId={item.productId}
                  price={item.price}
                  quantity={item.quantity}
                />
              </div>
            ))}
          </div>
        </NavLink>
      )}
      <div></div>
    </div>
  );
};

export default OrderAccord;
