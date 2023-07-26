import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ShowImg from "./ShowImg";
import AccordData from "./AccordData";
import OrderAccord from "./OrderAccord";

const OrderHistory = () => {
  const [orderHistory, setOrderHistory] = useState([]);
  const [isActive, setIsActive] = useState(false);

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
      <div className="text-center p-3">
        <h1 className="text-2xl font-bold ">Order History</h1>
      </div>
      <div className=" mx-5">
        <div className="m-10  my-2 justify-center odd:bg-white even:bg-white/50 rounded-xl">
          {orderHistory.map((order) => (
            <>
              <React.Fragment key={order._id}>
                {order.items.map((item) => (
                  <>
                    <OrderAccord
                      key={order._id}
                      oId={order._id}
                      oderDate={order.createdAt}
                      gTotal={order.total}
                      status={order.status}
                      items={order.items}
                    />
                  </>
                ))}
              </React.Fragment>
            </>
          ))}
          <hr />{" "}
        </div>
        <hr />
      </div>
    </div>
  );
};

export default OrderHistory;
