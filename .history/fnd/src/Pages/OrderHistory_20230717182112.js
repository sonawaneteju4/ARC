import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

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
        <h1 className="text-2xl font-bold mb-4">Order History</h1>
      <div className="text-center p-5">

        <div className="mt-5">
        {orderHistory.map((order) => (
              <div key={order._id}>
                <p>  <NavLink to={`/order/${order._id}`} orderPlace={true}>
                  Order Id: {" "}
                  {order._id}
                  </NavLink></p>
                  <p>Date: {" "}{new Date(order.createdAt).toLocaleString()}</p>
                  {order.items.map((item) => (
                    <div key={item._id}>
                      <div className="mb-1">{item.productId}</div>
                      <div className="text-gray-500 text-sm">
                      Price: {item.price}, Quantity: {item.quantity}
                      </div>
                    </div>
                    ))}
                <div className="p-2 ">{order.total}</div>
                <div className="p-2 ">{order.status}</div>
                ___________________________________________________________________________________________________________________
              </div>
            ))}
            <hr />
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
