import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import FormatPrice from '../helper.js/FormatPrice';

const Order = () => {
    const { orderId } = useParams();
    const [order, setOrder] = useState(null);
  
    useEffect(() => {
      const fetchOrderDetails = async () => {
        try {
          const response = await fetch(`${process.env.REACT_APP_BASE_API}/orders/order/${orderId}`, {
            headers: {
              "Content-Type": "application/json",
              "auth-token": sessionStorage.getItem("token"),
            },
          });
  
          if (!response.ok) {
            throw new Error("Failed to fetch order details");
          }
          const data = await response.json();
          console.log(data)
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
    <div className='mt-16'>
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
          <h3>Shipping Address:</h3>
          {/* Render shipping address details */}
          <p>Line 1: {order.address.line1}</p>
          {/* Render other address details */}
        </div>
        <div>
          <h3>Payment Details:</h3>
          {/* Render payment details */}
          <p>Total: <FormatPrice price={order.total} /></p>
          <p>Total: <FormatPrice price={order.shippingCharges} /></p>
          {/* Render other payment details */}
        </div>
      </div>
    ) : (
      <p>Loading order details...</p>
    )}
  </div>

  )
}

export default Order