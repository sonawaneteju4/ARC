import React, { useState } from "react";
import ShowImg from "./ShowImg";
import { NavLink } from "react-router-dom";

const OrderAccord = ({
  oId,
  oderDate,
  gTotal,
  status,
  items
}) => {
    const [isActive, setIsActive] = useState(false);
  return (
    <div onClick={() => setIsActive(!isActive)}>
      <div
        className="p-3    bg-teal-900/30 rounded-xl  "
      >
        <NavLink to={`/order/${oId}`} orderPlace={true}>
          <div>
            <p> Order Id: {oId.slice(-10)} </p>
            <p>Date: {new Date(oderDate).toLocaleString()}</p>
          </div>
          <div>
            <p className="">Total : {gTotal}</p>
            <p className="">Order Status : {status}</p>
          </div>
        </NavLink>
      </div>
      {isActive && (
        <div className=" bg-white/80 items-center justify-center flex-wrap">
          <NavLink to={`/order/${oId}`} orderPlace={true}>
            {items.map((item) => (
              <div className="h-56 rounded-2xl pt-4 m-3" key={item.productId}>
                <ShowImg
                  productId={item.productId}
                  price={item.price}
                  quantity={item.quantity}
                />
              </div>
            ))}
          </NavLink>
        </div>
      )}
      <div></div>
    </div>
  );
};

export default OrderAccord;
