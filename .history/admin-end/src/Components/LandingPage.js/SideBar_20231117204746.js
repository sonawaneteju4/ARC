import React from "react";

const SideBar = () => {
  return (
    <div className="pt-5  flex">


      p
      {/* Current Open Bills */}
      <div className=" w-64 bg-slate-300 m-1">
        Bill No:123456798 <br />
        Name : Tejas Sonawane <br />
        Vechical : Maruti Swift VXI 2022 <br />
        <hr />
        Full Body Wrap <br />
        PPF <br />
        Tint <br />
        <hr />
        <button className="bg-white px-2 m-2 rounded-xl">Open Bill</button>
      </div>
      <div className=" w-64 bg-slate-300 m-1">
        Bill No:123456798 <br />
        Name : Tejas Sonawane <br />
        Vechical : Maruti Swift VXI 2022 <br />
        <hr />
        Full Body Wrap <br />
        PPF <br />
        Tint <br />
        <hr />
        <button className="bg-white px-2 m-2 rounded-xl">Open Bill</button>
      </div>
      <button className="bg-black text-blue-50 px-2 m-2 rounded-xl">Open Bill More </button>

    </div>
  );
};

export default SideBar;
