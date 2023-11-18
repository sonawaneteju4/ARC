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
      <div className="flex flex-row m-5">
        <div className="basis-1/4 bg-slate-400 m-5">hi</div>
        <div className="basis-1/4 bg-slate-400 m-5">hi</div>
        <div className="basis-1/4 bg-slate-400 m-5">hi</div>
        <div className="basis-1/4 bg-slate-400 m-5">hi</div>
      </div>
    </div>

  );
};

export default Index;
