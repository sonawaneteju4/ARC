import React from "react";
import BillComp from "./BillComp";
import ProductOrderTable from "./ProductOrderTable";

const SideBar = () => {
  useSt
  return (
    <>
      {/* Side Bar Bill Section  */}
      <div className="pt-5  ">
        {/* Current Open Bills */}
        <div className="mx-6 font-bold text-2xl ">
          Open Current Bill
          <hr />
        </div>
        <div className="flex justify-center">
          <BillComp />
          <BillComp />
          <BillComp />
        </div>
      </div>
      <div className="flex justify-center">
        <button className=" bg-black text-blue-50 px-2 m-2 rounded-xl">
          Open Bill More{" "}
        </button>
      </div>
      <hr />

      <div className="mt-2 px-5">
        <ProductOrderTable />
        <div className="flex justify-center">
          <button className=" bg-black text-blue-50 px-2 m-2 rounded-xl">
            Open Bill More{" "}
          </button>
        </div>
      </div>
      <hr />
    </>
  );
};

export default SideBar;
