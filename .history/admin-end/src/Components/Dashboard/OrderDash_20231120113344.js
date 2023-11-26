import React, { useEffect, useState } from "react";
import { PiShoppingCartSimple } from "react-icons/pi";
import { PiUsersThin } from "react-icons/pi";
import { BsClipboard2Data } from "react-icons/bs";
import { FaIndianRupeeSign } from "react-icons/fa6";
const OrderDash = () => {

  //New Orders
  const [pendingOrdersCount, setPendingOrdersCount] = useState(null);

  useEffect(() => {
    async function fetchPendingOrdersCount() {
      try {
        const response = await fetch('http://localhost:5000/api/orders/pendingorderscount');

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setPendingOrdersCount(data.count);
      } catch (error) {
        console.error('Error fetching pending orders count:', error);
      }
    }

    fetchPendingOrdersCount();
  }, []);




  //Total Earning 
  const [totalEarnings, setTotalEarnings] = useState(null);

  useEffect(() => {
    async function fetchTotalEarnings() {
      try {
        const response = await fetch('http://localhost:5000/api/orders/totalearning');

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setTotalEarnings(data.totalEarnings);
      } catch (error) {
        console.error('Error fetching total earnings:', error);
      }
    }

    fetchTotalEarnings();
  }, []);

  //Users Count
  const [userCount, setUserCount] = useState(null);

  useEffect(() => {
    async function fetchUserCount() {
      try {
        const response = await fetch(
          "http://localhost:5000/api/auth/countusers"
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setUserCount(data.userCount);
      } catch (error) {
        console.error("Error fetching user count:", error);
      }
    }

    fetchUserCount();
  }, []);

  return (
    <>
      {/* Total Orders */}
      <div className="basis-1/4  m-3 p-3 rounded-xl backdrop-sepia-0 bg-black/40 backdrop-blur-sm drop-shadow-xl">
        <div className="flex justify-center items-center h-10 w-10 rounded-full bg-blue-50 p-2 my-3 mx-5">
          <PiShoppingCartSimple className="" />
        </div>
        <div className="font-normal mx-5 font-mono text-4xl tabular-nums slashed-zero">
          {pendingOrdersCount}
        </div>
        <div className="font-bold mt-2 mx-5 font-mono text-4xl">
          New Orders
        </div>
        </div>
      {/*New Quotation */}
      <div className="basis-1/4 bg-white m-3 p-3 rounded-xl">
        <div className="flex justify-center items-center h-10 w-10 rounded-full bg-blue-50 p-2 my-3 mx-5">
          <BsClipboard2Data className="" />
        </div>
        <div className="font-normal mx-5 font-mono text-4xl tabular-nums slashed-zero">
          20
        </div>
        <div className="font-bold mt-2 mx-5 font-mono text-3xl">
          New Quotation Requests
        <small className="text-sm">(Today)</small>
        </div>
      </div>
      {/* Total Earning */}
      <div className="basis-1/4 bg-white m-3 p-3 rounded-xl">
        <div className="flex justify-center items-center h-10 w-10 rounded-full bg-blue-50 p-2 my-3 mx-5">
          <FaIndianRupeeSign className="" />
        </div>
        <div className="font-normal mx-5 font-mono text-4xl tabular-nums slashed-zero">
        &#x20B9;  {totalEarnings}
        </div>
        <div className="font-bold mt-2 mx-5 font-mono text-4xl">
          Total Earning
        </div>
      </div>
      {/* Total Users */}
      <div className="basis-1/4 bg-white m-3 p-3 rounded-xl">
        <div className="flex justify-center items-center h-10 w-10 rounded-full bg-blue-50 p-2 my-3 mx-5">
          <PiUsersThin />{" "}
        </div>
        <div className="font-normal mx-5 font-mono text-4xl tabular-nums slashed-zero">
          {userCount}
        </div>
        <div className="font-bold mt-2 mx-5 font-mono text-4xl">
          Total Users
        </div>
      </div>{" "}
    </>
  );
};

export default OrderDash;
