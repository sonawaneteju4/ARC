import React, { useEffect, useState } from 'react'

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
        console.log(data)
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div className='mt-16'>
          <div className="text-">
      <h1 className="text-2xl font-bold mb-4">Order History</h1>
      <table className="w-full border">
        <thead>
          <tr>
            <th className="p-2 border">Order ID</th>
            <th className="p-2 border">Date</th>
            <th className="p-2 border">Items</th>
            <th className="p-2 border">Total</th>
            <th className="p-2 border">Status</th>
          </tr>
        </thead>
        <tbody>
          {orderHistory.map((order) => (
            <tr key={order._id}>
              <td className="p-2 border">{order._id}</td>
              <td className="p-2 border">{order.createdAt}</td>
              <td className="p-2 border">
                {order.items.map((item) => (
                  <div key={item.productId}>
                    <p className="mb-1">{item.productId}</p>
                    <p className="text-gray-500 text-sm">
                      Price: {item.price}, Quantity: {item.quantity}
                    </p>
                  </div>
                ))}
              </td>
              <td className="p-2 border">{order.total}</td>
              <td className="p-2 border">{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  
    </div>
  )
}

export default OrderHistory