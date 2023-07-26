import React from "react";
import AdminNav from "./AdminNav";

const AdminIndex = () => {
  return (
    <div>
      <div className="pt-16 flex flex-row">
        <div className="basis-1/4 p-5 m-5 flex">
          <div className="mt-auto mb-auto block">
            <img
              className="h-32  mr-auto imgShadow"
              src="/image/orders.png"
              alt=""
            />
          </div>
          <div className="pl-10">
            <p className="py-1 font-bold">New Orders (4)</p>
            <p className="py-1 font-bold">Printing (2)</p>
            <p className="py-1 font-bold">Package (5)</p>
            <p className="py-1 font-bold">Shiping (5)</p>
            <p className="py-1 font-bold">Deliverd (102)</p>
            <p className="py-1 font-bold">Exchange (3)</p>
            <p className="py-1 font-bold">Cancle (2)</p>
            <p className="py-1 font-bold">All Orders (122)</p>
          </div>
        </div>
        <div className="basis-1/4  p-5 m-5 flex">
          <div className="pl-10 mt-auto mb-auto">
            <p className="py-1 font-bold">New Users(2)</p>
            <p className="py-1 font-bold">Active Users(2)</p>
            <p className="py-1 font-bold">Users Growth(2)</p>
          </div>
          <div className="mt-auto mb-auto block">
            <img
              className="h-32 mr-auto imgShadow"
              src="/image/admin.png"
              alt=""
            />
          </div>
        </div>
        <div className="basis-1/4 p-5 m-5 flex">
          <div className="mt-auto mb-auto block">
            <img
              className="h-32  mr-auto imgShadow"
              src="/image/inventory.png"
              alt=""
            />
          </div>
          <div className="pl-10">
            <p className="py-1 font-bold">Add New Products (4)</p>
            <p className="py-1 font-bold">Update Product (2)</p>
            <p className="py-1 font-bold">Re Product (5)</p>
            <p className="py-1 font-bold">Shiping (5)</p>
            <p className="py-1 font-bold">Deliverd (102)</p>
            <p className="py-1 font-bold">Exchange (3)</p>
            <p className="py-1 font-bold">Cancle (2)</p>
            <p className="py-1 font-bold">All Orders (122)</p>
          </div>
        </div>
        <div className="basis-1/4 bg-slate-500 p-5 m-5 text-center h-60">
          <img
            className="h-40 block ml-auto mr-auto imgShadow"
            src="/image/qt.png"
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
