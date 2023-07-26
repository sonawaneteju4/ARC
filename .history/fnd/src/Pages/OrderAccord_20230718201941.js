import React, { useState } from "react";
import ShowImg from "./ShowImg";
import { NavLink } from "react-router-dom";

const OrderAccord = ({ oId, oderDate, gTotal, status, items }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div key={oId} onClick={() => setIsActive(!isActive)}>
      <div className="p-3 flex  bg-teal-900/30 rounded-xl  ">
        <NavLink to={`/order/${oId}`} orderPlace={true}>
          <div className="flex">
            <p className="" > Order Id: {oId.slice(-10)} </p>
            <p className=""> Date: {new Date(oderDate).toLocaleString()}</p>
            <p className="">Total : {gTotal}</p>
            <p className="">Order Status : {status}</p>
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
