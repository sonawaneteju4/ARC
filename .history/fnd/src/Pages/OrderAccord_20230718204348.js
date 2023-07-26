import React, { useState } from "react";
import ShowImg from "./ShowImg";
import { NavLink } from "react-router-dom";

const OrderAccord = ({ oId, oderDate, gTotal, status, items }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="m-2">
      <div className="p-3 text-justify bg-gray-300 " onMouseEnter={() => setIsActive(!isActive)} onMouseLeave={() => setIsActive(!isActive)} key={oId} >
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
        <NavLink to={`/order/${oId}`} orderPlace={true} >
          <div className="px-3 flex bg-white/80 items-center odd:bg-white even:bg-white/50 ">
            {items.map((item) => (
              <div className=" rounded-2xl pt-4" key={item.productId}>
                <div>

                <ShowImg
                  productId={item.productId}
                  price={item.price}
                  quantity={item.quantity}
                  />
              </div>
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
