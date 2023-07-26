import React from "react";
import AdminNav from "./AdminNav";

const AdminIndex = () => {
  return (
    <div>
      <div className="pt-16 flex flex-row">
        <div className="basis-1/4  p-5 m-5 text-center h-60">
          <img
            className="h-20 block ml-auto mr-auto imgShadow"
            src="/image/orders.png"
            alt=""
          />
          <p>New Orders</p>
          <p>Printing</p>
          <p>Pack Orders</p>
          <p>Shiping</p>
        </div>
        <div className="basis-1/4 bg-slate-500 p-5 m-5 text-center h-60">
          <img src="" alt="" />
          <img
            className="h-20 block ml-auto mr-auto imgShadow"
            src="/image/admin.png"
            alt=""
          />
        </div>
        <div className="basis-1/4 bg-slate-500 p-5 m-5 text-center h-60">
          <img
            className="h-40 block ml-auto mr-auto imgShadow"
            src="/image/orders.png"
            alt=""
          />
          Products
        </div>
        <div className="basis-1/4 bg-slate-500 p-5 m-5 text-center h-60">
          <img
            className="h-40 block ml-auto mr-auto imgShadow"
            src="/image/orders.png"
            alt=""
          />
          Quotes
        </div>
      </div>

      {/* <div className=" pt-16 text-5xl text-center">
        <div
          className=" bg-cover bg-fixed"
          style={{ backgroundImage: `url("/image/m5cs.jpg")` , height:'650px'}}
        >
          <h1 className="pt-20" style={{ fontFamily: "var(--default-font)" }}>
            default Ar Customs
          </h1>
        </div>

        <div
          className=" bg-cover bg-fixed"
          style={{ backgroundImage: `url("/image/mainbgg.jpg")` , height:'650px'} }
        >
          <h1 className="pt-20" style={{ fontFamily: "var(--heading-font)" }}>
            AR Customs
          </h1>
        </div>

        <div
          className="bg-cover bg-fixed"
          style={{ backgroundImage: `url("/image/m5cs.jpg")` , height:'650px'}}
        >
          <p className="pt-20" style={{ fontFamily: "var(--art-font)" }}>
            Art Content Something
          </p>
        </div>

        <div
          className=" bg-cover bg-fixed"
          style={{ backgroundImage: `url("/image/mainbgg.jpg")`  , height:'650px'}}
        >
          <p style={{ fontFamily: "var(--content-font)" }}>
            Whereas disregard and contempt for human rights have resulted
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default AdminIndex;
