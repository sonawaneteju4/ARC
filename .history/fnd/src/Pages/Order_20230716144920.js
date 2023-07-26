import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import FormatPrice from './FormatPrice';

const Order = () => {
  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        // Make an API call to fetch the order details using the orderId
        const response = await fetch(`${process.env.REACT_APP_BASE_API}/orders/${orderId}`, {
          headers: {
            "auth-token": sessionStorage.getItem("token"),
          },
        });

        if (response.ok) {
          const data = await response.json();
          setOrder(data);
        } else {
          console.error('Failed to fetch order details');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchOrderDetails();
  }, [orderId]);

  
  return (
    <div className='mt-20 flex flex-row h-screen'>
        <div className="basis-1/2">

        </div>
        <div className="basis-1/2">
        <div>
      <h1>Order Details</h1>
      <p>Order ID: {order._id}</p>
      <p>User: {order.user.name}</p>
      <p>Email: {order.user.email}</p>
      {/* Render other order details */}
    </div>
        </div>
        
    </div>
  )
}

export default Order