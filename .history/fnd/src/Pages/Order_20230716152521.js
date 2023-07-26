import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FormatPrice from "../helper.js/FormatPrice";

const Order = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BASE_API}/orders/order/${orderId}`,
          {
            headers: {
              "Content-Type": "application/json",
              "auth-token": sessionStorage.getItem("token"),
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch order details");
        }
        const data = await response.json();
        console.log(data);
        console.log(    <div className="container mx-auto">
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
    );
  };)
        console.log(data.status)
        const cartId = data._id;
        setOrder(data);
      } catch (error) {
        console.error(error);
        // Handle error state
      }
    };

    fetchOrderDetails();
  }, [orderId]);

  return (
    <div className="mt-16">
      {order ? (
        <div>
          <h2>Order Details</h2>
          {/* Render the order details */}
          <p>Order ID: {order._id}</p>
          {/* Render other order details */}
          <div>
            <h3>Items:</h3>
            {order.items.map((item) => (
              <div key={item._id}>
                <p>Product: {item.productId}</p>
                {/* Render other item details */}
              </div>
            ))}
          </div>
          <div>
            <h3>Shipping Address: {" "}

            {/* Render shipping address details */}
           
               {order.address.line1}{" "}
              {order.address.line2}{" "}
              {order.address.city}{" "}
              {order.address.state}{" "}
              {order.address.pincode}{" "}
              {order.address.phone}
            
            </h3>
            {/* Render other address details */}
          </div>
          <div>
            <h3>Payment Details:</h3>
            {/* Render payment details */}
            <p>
              Total: <FormatPrice price={order.total} />
            </p>
               <p>
              status: {order.status}

              </p>
            <p>
              shippingCharges: <FormatPrice price={order.shippingCharges} />
            </p>
            {/* Render other payment details */}
          </div>
        </div>
      ) : (
        <p>Loading order details...</p>
      )}
    </div>
  );
};

export default Order;
