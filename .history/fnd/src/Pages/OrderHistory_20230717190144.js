import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import ShowImg from "./ShowImg";

const OrderHistory = () => {
  const [orderHistory, setOrderHistory] = useState([]);

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
      <div className="text-center p-5">
        <h1 className="text-2xl font-bold mb-4">Order History</h1>
      </div>

      <div className="mt-5">
        {orderHistory.map((order) => (
          <div  className="m-10 flex my-2 bg-white" key={order._id}>
              <div className="flex items-center justify-center  bg-gray-200/50 w-96">
              <NavLink to={`/order/${order._id}`} orderPlace={true}>
                <div>
                  <p> Order Id: {order._id}</p>
                  <p>Date: {new Date(order.createdAt).toLocaleString()}</p>
                  <p className="">Total : {order.total}</p>
                  <p className="">Order Status : {order.status}</p>
                </div>
              </div>
                </NavLink>
              <div className="flex">
                {order.items.map((item) => (
                  <div key={item._id}>
                    <ShowImg
                      productId={item.productId}
                      price={item.price}
                      quantity={item.quantity}
                    />
                  </div>
                ))}
              </div>
              <hr />{" "}
            </div>
        ))}
        <hr />
      </div>
    </div>
  );
};

export default OrderHistory;
