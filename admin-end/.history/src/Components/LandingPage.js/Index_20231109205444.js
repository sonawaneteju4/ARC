import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import TopNavbar from "./TopNavbar";
import SideBar from "./SideBar";
import LoginComp from "../LoginComp";

const Index = () => {
  let navigate = useNavigate();
  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      //
    } else {
      navigate("/login");
    }
  }, []);
  return (
    <div>
      {/* Top Nav Bar */}
      <TopNavbar/>
            {/* Side Bar */}
    <SideBar/>
    <LoginComp/>
    </div>

  );
};

export default Index;
