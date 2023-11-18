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
    <div className="bg-slate-50 h-96">
      <div className="flex flex-row">
        <div className="basis-1/4 ">hi</div>
        <div className="basis-1/4 ">hi</div>
        <div className="basis-1/4 ">hi</div>
        <div className="basis-1/4 ">hi</div>
      </div>
    </div>

  );
};

export default Index;
