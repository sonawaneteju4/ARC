import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import TopNavbar from "./TopNavbar";
import { PiShoppingCartSimple } from "react-icons/pi";

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
      {/* Order DashBor */}
      <div className="flex flex-row p-5">
       
      </div>
    </div>

  );
};

export default Index;
