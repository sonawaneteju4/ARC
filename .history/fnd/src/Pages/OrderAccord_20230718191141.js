import React from "react";

const OrderAccord = ({ key,oderDate }) => {
  return (
    <div>
      <div
        className="p-3 flex flex-w bg-teal-100/30 rounded-xl  "
        key={order._id}
      >
        <NavLink to={`/order/${order._id}`} orderPlace={true}>
          <div>
            <p> Order Id: {order._id.slice(-10)} </p>
            <p>Date: {new Date(order.createdAt).toLocaleString()}</p>
          </div>
          <div>
            <p className="">Total : {order.total}</p>
            <p className="">Order Status : {order.status}</p>
          </div>
        </NavLink>
      </div>
      <div className="flex items-center justify-center  flex-wrap">
        <NavLink to={`/order/${order._id}`} orderPlace={true}>
          <div
            className="bg-slate-300/80 h-56 rounded-2xl pt-4 m-3 "
            key={item._id}
          >
            <ShowImg
              productId={item.productId}
              price={item.price}
              quantity={item.quantity}
            />
          </div>
        </NavLink>
      </div>
      <div></div>
    </div>
  );
};

export default OrderAccord;
