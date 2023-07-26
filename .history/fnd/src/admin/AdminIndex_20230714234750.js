import React from "react";
import AdminNav from "./AdminNav";

const AdminIndex = () => {
  return (
    <div>
      <div className=" pt-16 text-5xl text-center">
        <div
          className=" bg-cover bg-fixed"
          style={{ backgroundImage: `url("/image/m5cs.jpg")` , height:'650px', background }}
        >
          <h1 className="pt-20" style={{ fontFamily: "var(--default-font)" }}>
            default Ar Customs
          </h1>
        </div>

        <div
          className=" h-screen bg-cover bg-fixed"
          style={{ backgroundImage: `url("/image/mainbgg.jpg")` }}
        >
          <h1 className="pt-20" style={{ fontFamily: "var(--heading-font)" }}>
            AR Customs
          </h1>
        </div>

        <div
          className=" h-screen bg-cover bg-fixed"
          style={{ backgroundImage: `url("/image/m5cs.jpg")` }}
        >
          <p className="pt-20" style={{ fontFamily: "var(--art-font)" }}>
            Art Content Something
          </p>
        </div>

        <div
          className=" h-screen bg-cover bg-fixed"
          style={{ backgroundImage: `url("/image/mainbgg.jpg")` }}
        >
          <p style={{ fontFamily: "var(--content-font)" }}>
            Whereas disregard and contempt for human rights have resulted
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminIndex;
