import React from "react";
import { Link } from "react-router-dom";
import TopNavbar from "./TopNavbar";
import SideBar from "./SideBar";

const Index = () => {
  return (
    <div>
      {/* Top Nav Bar */}
      <TopNavbar/>
            {/* Side Bar */}
    <SideBar/>
    
    </div>

  );
};

export default Index;
