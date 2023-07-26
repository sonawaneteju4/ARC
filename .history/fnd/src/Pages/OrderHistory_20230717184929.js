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
          <div className="flex" key={order._id}>
            <div className="pl-10">
            <p>
              {" "}
              <NavLink to={`/order/${order._id}`} orderPlace={true}>
                Order Id: {order._id}
              </NavLink>
            </p>
            <p>Date: {new Date(order.createdAt).toLocaleString()}</p>
                  <div className="">{order.total}</div>
              <div className="">{order.status}</div>
            </div>
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
