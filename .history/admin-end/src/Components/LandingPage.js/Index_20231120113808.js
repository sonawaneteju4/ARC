import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import TopNavbar from "./TopNavbar";
import OrderDash from "../Dashboard/OrderDash";
import VisterChart from "../Dashboard/VisterChart";
import ProductSell from "../Dashboard/ProductSell";

const Index = () => {
  let navigate = useNavigate();
  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      //Do Nothing
    } else {
      navigate("/login");
    }
  }, []);
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      {/* Order DashBoard Section */}
      <div className="flex flex-row p-5">
       <OrderDash/>
      </div>
      <div className="flex">
        <VisterChart/>
        <ProductSell/>
      </div>
    </div>

  );
};

export default Index;