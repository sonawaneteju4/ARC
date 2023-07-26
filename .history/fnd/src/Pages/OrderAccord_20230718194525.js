import React, { useState, useEffect } from "react";
import ShowImg from "./ShowImg";
import { NavLink } from "react-router-dom";

const OrderAccord = ({
  oId,
  oderDate,
  gTotal,
  status,
  pId,
  price,
  quantity,
}) => {
    const [isActive, setIsActive] = useState(false);
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
    ,9m   
  );
};

export default OrderAccord;
