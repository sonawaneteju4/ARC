import React from "react";
import BillComp from "./BillComp";

const SideBar = () => {
  return (
    <>
      <div className="pt-5  flex">
        {/* Current Open Bills */}
      
      <BillComp/>
      <BillComp/>
      </div>
        <button className=" bg-black text-blue-50 px-2 m-2 rounded-xl">
          Open Bill More{" "}
        </button>
    </>
  );
};

export default SideBar;
