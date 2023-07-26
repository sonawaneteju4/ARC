import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FormatPrice from "../helper.js/FormatPrice";

const Order = ({ orderPlace = true }) => {
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
        console.log(data.status);
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
    <div className="mt-16 h-screen bg-white">
      <h2 className="pl-5 bg">Order Details</h2>
      {orderPlace && (
        <div className="h-60 pt-10 text-center">
          <div>
          <img className="h-40 mt-auto mr-auto ml-auto mb-auto" src="/image/check.gif" alt=""></img>
          </div>
          <div className="font-extrabold text-3xl">Order Placed</div>
        </div>
      )}
      {order ? (
        <div className="ml-5">
          <p>Order ID: {order._id}</p>
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
            <h3>
              Shipping Address: {/* Render shipping address details */}
              {order.address.line1} {order.address.line2} {order.address.city}{" "}
              {order.address.state} {order.address.pincode}{" "}
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
            <p>status: {order.status}</p>
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
