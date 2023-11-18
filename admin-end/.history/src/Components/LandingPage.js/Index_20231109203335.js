import React from "react";
import { Link } from "react-router-dom";
import TopNavbar from "./TopNavbar";
import SideBar from "./SideBar";
import LoginComp from "../LoginComp";

const Index = () => {
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
