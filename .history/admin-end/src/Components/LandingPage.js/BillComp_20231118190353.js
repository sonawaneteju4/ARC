import React from "react";

const BillComp = () => {
  return (
    <div>
      {" "}
      <div className="bg-slate-300 m-3 p-2">
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
    </div>
  );
};

export default BillComp;
