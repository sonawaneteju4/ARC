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
    <div className="bg-slate-300">
      <div className="flex flex-row p-5">
        <div className="basis-1/4 bg-white m-3">hi</div>
        <div className="basis-1/4 bg-white m-3">hi</div>
        <div className="basis-1/4 bg-white m-3">hi</div>
        <div className="basis-1/4 bg-white m-3">hi</div>
      </div>
    </div>

  );
};

export default Index;
