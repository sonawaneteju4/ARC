import React, { useState } from "react";
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
    <div onClick={() => setIsActive(!isActive)}>
      <div
        className="p-3  flex flex-w bg-teal-900/30"
      >
        <NavLink to={`/order/${oId}`} orderPlace={true}>
          <div>
            <p> Order Id:  </p>
            <p>Date: {new Date(oderDate).toLocaleString()}</p>
          </div>
          <div>
            <p className="">Total : {gTotal}</p>
            <p className="">Order Status : {status}</p>
          </div>
        </NavLink>
      </div>
      {isActive && (
      <div className="flex bg-white/80 items-center justify-center  flex-wrap">
        <NavLink to={`/order/${oId}`} orderPlace={true}>
          <div
            className=" h-56 rounded-2xl pt-4 m-3 "
            key={pId}
          >
            <ShowImg
              productId={pId}
              price={price}
              quantity={quantity}
            />
          </div>
        </NavLink>
      </div>
      )}
      <div></div>
    </div>
  );
};

export default OrderAccord;
