import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FormatPrice from "../helper.js/FormatPrice";
import OrderProducts from "./OrderProducts";

const Order = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);
  const [date, setdate] = useState([]);

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
        const orderTime = data.createdAt;        
        setdate(data.createdAt);
        setOrder(data);
      } catch (error) {
        console.error(error);
        // Handle error state
      }
    };

    fetchOrderDetails();
  }, [orderId]);

  return (
    <div className="mt-16 max-h-max mb-5 bg-white">
      <h2 className="pl-5 bg-slate-500 h-10 w-screen pt-2 text-white">
        Order Details
      </h2>
      <div className="h-60 pt-10 text-center">
        <div>
          <img
            className="h-40 mt-auto mr-auto ml-auto mb-auto"
            src="/image/check.gif"
            alt=""
          ></img>
        </div>
        <div className="font-extrabold text-3xl">Order Placed</div>
      </div>

      {order ? (
        <div className="">
          <p className="pt-5 text-center">
            <span className="font-extrabold">Order ID : </span>

            {order._id}
          </p>
          <p className="pt-5 text-center">
            <span className="font-extrabold">Order ID : </span>
            {order.createdAt}
          </p>
            <span className="font-extrabold"></span>
          <div className="">
            <hr />
            <div className="px-32 pt-5 pb-5 ">
              {order.items.map((item) => (
                <div
                  key={item._id}
                  className="flex flex-row odd:bg-slate-100/50 even:bg-slate-200/50 pt-2"
                >
                  <OrderProducts
                    productId={item.productId}
                    price={item.price}
                    quantity={item.quantity}
                    total={item.price * item.quantity}
                  />
                  {/* <div className="basis-1/3">
                <img src="" alt="" />Img :{item.productId}
              </div>
              <div className="basis-1/4">Name: {item.name}</div>
              <div className="basis-1/5">Price :{item.price}</div>
              <div className="basis-1/5">Quantity: {item.quantity}</div>
              <div className="basis-1/5">Total  = {item.price*item.quantity} </div> */}
                  {/* Render other item details */}
                </div>
              ))}
            </div>
          </div>
          <hr />
          <div className="mx-32 flex justify-between  mt-5">
            <div className="">
              <h3>
                <span className="font-extrabold">
                  Shipping Address: {/* Render shipping address details */}
                </span>
                {order.address.line1} {order.address.line2}
                <br></br> {order.address.city} {order.address.state}
                <br /> {order.address.pincode}{" "}
              </h3>
            </div>

            <div className=" mr-60">
              <p>
                <span className="font-extrabold">Contact No : </span>
                {order.address.phone}
              </p>
              <h3>
                <span className="font-extrabold">Payment Details: </span>
                Ofline
              </h3>
              {/* Render payment details */}
              <p>
                <span className="font-extrabold">Order status:</span>{" "}
                {order.status}
              </p>
              <p>
                <span className="font-extrabold">Shipping Charges: </span>
                <FormatPrice price={order.shippingCharges} />
              </p>
              <p>
                <span className="font-extrabold">
                  Grand Total: <FormatPrice price={order.total} />
                </span>
              </p>
              {/* Render other payment details */}
            </div>
          </div>
        </div>
      ) : (
        <p>Loading order details...</p>
      )}
    </div>
  );
};

export default Order;
