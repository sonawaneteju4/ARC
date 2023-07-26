import React from "react";

import { Link } from "react-router-dom";

const AdminNav = () => {
  return (
    <div className="w-screen h-16 mt-0 bg-black text-sky-300 font-sans flex fixed" style={{"fontFamily: "PT Sans Narrow"}}>
      <div className="pl-5 my-5">
        <Link to="/adminHome">Orders</Link>
      </div>
      <div className="pl-5 my-5">
        <Link to="/adminHome">Products</Link>
      </div>
      <div className="pl-5 my-5">
        <Link to="/adminHome">Services</Link>
      </div>
      <div className="pl-5 my-5">
        <Link to="/adminHome">Gallary</Link>
      </div>
      <div className="pl-5 my-5">
        <Link to="/adminHome">Quotations</Link>
      </div>
      <div className="pl-5 my-5">
        <Link to="/adminHome">Contact Us</Link>
      </div>
      <div className="pl-5 my-5">
        <Link to="/">Home</Link>
      </div>
    </div>
  );
};

export default AdminNav;
