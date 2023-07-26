import React from "react";

import { Link } from "react-router-dom";
import Button from "../helper.js/Button";

const AdminNav = () => {
  return (
    <div className="w-screen h-16 mt-0 grid grid-cols-2 bg-black text-w fixed" style={{fontFamily: "Montserrat"}}>
      <div className="pl-5 my-5">
        <Link to="/admin/adminHome">Admin Dashbord</Link>
      </div>
      <div className="flex justify-end mr-10">
          {" "}
          <Button value={"Logout"} />
        </div>
    </div>
  );
};

export default AdminNav;
