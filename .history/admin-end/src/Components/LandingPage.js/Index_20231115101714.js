import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import TopNavbar from "./TopNavbar";

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
    <div>
      <TopNavbar/>
    </div>

  );
};

export default Index;
