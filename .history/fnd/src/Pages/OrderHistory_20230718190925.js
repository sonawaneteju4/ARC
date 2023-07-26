import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ShowImg from "./ShowImg";
import AccordData from "./AccordData";
import OrderAccord from "./OrderAccord";

const OrderHistory = () => {
  const [orderHistory, setOrderHistory] = useState([]);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // Make the API call to fetch order history
    fetch(`${process.env.REACT_APP_BASE_API}/orders/orderhistory`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": sessionStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Set the order history data in state
        setOrderHistory(data);
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div className="mt-16">
      <div className="text-center p-3">
        <h1 className="text-2xl font-bold ">Order History</h1>
      </div>
      <div className=" mx-5">
        <div className="m-10  my-2 justify-center odd:bg-white even:bg-white/50 rounded-xl">
          {orderHistory.map((order) => (
            <>
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
                {order.items.map((item) => (
                  <NavLink to={`/order/${order._id}`} orderPlace={true}>
                    <div
                      className="bg-slate-300/80 h-56 rounded-2xl pt-4 m-3 "
                      key={item._id}
                    >
                    <OrderAccord key={order._id} oderDate={order.createdAt} gTotal={order.total} status={order.status} pId={item.productId} />
                      <ShowImg
                        productId={item.productId}
                        price={item.price}
                        quantity={item.quantity}
                      />
                    </div>
                  </NavLink>
                ))}
              </div>
              <div></div>
              <hr />{" "}
            </>
          ))}
        </div>
        <hr />
      </div>
    </div>
  );
};

export default OrderHistory;