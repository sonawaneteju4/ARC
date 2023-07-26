import React from "react";

const OrderAccord = ({
  oId,
  oderDate,
  gTotal,
  status,
  pId,
  price,
  quantity,
}) => {
  return (
    <div>
      <div
        className="p-3 flex flex-w bg-teal-100/30 rounded-xl  "
      >
        <NavLink to={`/order/${oId}`} orderPlace={true}>
          <div>
            <p> Order Id: {order._id.slice(-10)} </p>
            <p>Date: {new Date(oderDate).toLocaleString()}</p>
          </div>
          <div>
            <p className="">Total : {gTotal}</p>
            <p className="">Order Status : {status}</p>
          </div>
        </NavLink>
      </div>
      <div className="flex items-center justify-center  flex-wrap">
        <NavLink to={`/order/${order._id}`} orderPlace={true}>
          <div
            className="bg-slate-300/80 h-56 rounded-2xl pt-4 m-3 "
            key={pId}
          >
            <ShowIm
              productId={pId}
              price={price}
              quantity={quantity}
            />
          </div>
        </NavLink>
      </div>
      <div></div>
    </div>
  );
};

export default OrderAccord;
