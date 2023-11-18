import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import TopNavbar from "./TopNavbar";
import OrderDash from "../Orders/OrderDash";

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
    <div className="bg-slate-300">
      {/* Order DashBoard Section */}
      <div className="flex flex-row p-5">
       <OrderDash/>
      </div>
      <div>
        <Vis
      </div>
    </div>

  );
};

export default Index;
