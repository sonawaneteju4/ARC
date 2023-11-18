import React from "react";
import BillComp from "./BillComp";

const SideBar = () => {
  return (
    <>
      <div className="pt-5  flex justify-center">
        {/* Current Open Bills */}
        <div>
          <BillComp />
          <BillComp />
        </div>
        <div>
          <BillComp />
          <BillComp />
        </div>
        <div>
          <button className=" bg-black text-blue-50 px-2 m-2 rounded-xl">
            Open Bill More{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default SideBar;
