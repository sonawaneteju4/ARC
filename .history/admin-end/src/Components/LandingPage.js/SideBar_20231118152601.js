import React from "react";
import BillComp from "./BillComp";

const SideBar = () => {
  return (
    <>
      {/* Side Bar Bill Section  */}
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
      </div>
      <div className="flex justify-center">
        <button className=" bg-black text-blue-50 px-2 m-2 rounded-xl">
          Open Bill More{" "}
        </button>
      </div>
      <hr />


      <div>
      <table class="border-collapse border border-slate-400 ...">
  <thead>
    <tr>
      <th class="border border-slate-300 ...">State</th>
      <th class="border border-slate-300 ...">City</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-slate-300 ...">Indiana</td>
      <td class="border border-slate-300 ...">Indianapolis</td>
    </tr>
    <tr>
      <td class="border border-slate-300 ...">Ohio</td>
      <td class="border border-slate-300 ...">Columbus</td>
    </tr>
    <tr>
      <td class="border border-slate-300 ...">Michigan</td>
      <td class="border border-slate-300 ...">Detroit</td>
    </tr>
  </tbody>
</table>
      </div>
    </>
  );
};

export default SideBar;
