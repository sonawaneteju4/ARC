import React, { useState } from "react";
import ShowImg from "./ShowImg";
import { NavLink } from "react-router-dom";

const OrderAccord = ({ oId, oderDate, gTotal, status, items }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div key={oId} onClick={() => setIsActive(!isActive)}>
      <div className="p-3  text-justify bg-gray-300 ">
        <NavLink to={`/order/${oId}`} orderPlace={true}>
          <div className="flex">
            <div className="basis-1/2">
              <p className="mx-10"> Order Id: {oId.slice(-10)} </p>
              <p className="mx-10">
                {" "}
                Date: {new Date(oderDate).toLocaleString()}
              </p>
            </div>
            <div className="basis-1/2">
              <p className="mx-10">Total : {gTotal}</p>
              <p className="mx-10">Order Status : {status}</p>
            </div>
          </div>
        </NavLink>
      </div>
      {isActive && (
        <NavLink to={`/order/${oId}`} orderPlace={true}>
          <div className="flex bg-white/80 items-center justify-center ">
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
