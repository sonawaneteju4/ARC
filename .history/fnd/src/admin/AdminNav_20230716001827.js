import React from "react";

import { Link } from "react-router-dom";
import Button from "../helper.js/Button";


const AdminNav = () => {
  useEffec(() => {
    if (sessionStorage.getItem("token")) {
      UserDetails();
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <div className="w-screen h-16 mt-0 grid grid-cols-2 bg-gray-700 text-white fixed" style={{fontFamily: "Montserrat"}}>
      <div className="pl-5 my-5">
        <Link to="/admin/adminHome">Admin Dashbord</Link>
      </div>
      <div className="flex justify-end mt-2 mr-10">
          {" "}
          <Button value={"Logout"} />
        </div>
    </div>
  );
};

export default AdminNav;
