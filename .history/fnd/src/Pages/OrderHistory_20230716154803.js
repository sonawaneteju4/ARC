import React, { useEffect, useState } from "react";

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
        <table className="w-full border-white border-2">
          <thead>
            <tr>
              <th className="p-2  border-white  border">Order ID</th>
              <th className="p-2 border-white  border">Date</th>
              <th className="p-2  border-white border">Items</th>
              <th className="p-2 border-white  border">Total</th>
              <th className="p-2 border-white  border">Status</th>
            </tr>
          </thead>
          <tbody>
            {orderHistory.map((order) => (
              <tr key={order._id}>
                <td className="p-2 border-white border">{order._id}</td>
                <td className="p-2 border-white border">{order.createdAt}</td>
                <td className="p-2 border-white border">
                  {order.items.map((item) => (
                    <div key={item.productId}>
                      <p className="mb-1">{item.productId}</p>
                      <p className="text-gray-500 text-sm">
                        Price: {item.price}, Quantity: {item.quantity}
                      </p>
                    </div>
                  ))}
                </td>
                <td className="p-2 border-white border">{order.total}</td>
                <td className="p-2 border-white border">{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderHistory;
