import React from "react";

import { Link } from "react-router-dom";

const AdminNav = () => {
  return (
    <div className="w-screen h-16 mt-0 bg-black text-sky-300 font-sans flex fixed" style={{fontFamily: "Montserrat"}}>
      <div className="pl-5 my-5">
        <Link to="/admin/adminHome">Admin Dashbord</Link>
      </div>
      <div className="flex justify-end mr-10">
          {" "}
          <Butto value={"Logout"} />
        </div>
    </div>
  );
};

export default AdminNav;
