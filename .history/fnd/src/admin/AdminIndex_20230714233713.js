import React from "react";
import AdminNav from "./AdminNav";

const AdminIndex = () => {
  return (
    <div>
      <div className=" pt-16 text-5xl text-center">
        <div
          className=" h-80 bg-cover bg-fixed"
          style={{ backgroundImage: `url("/image/m5cs.jpg")` }}
        >
          <h1 style={{ fontFamily: "var(--default-font)" }}>
            default Ar Customs
          </h1>
        </div>
          <div
            className=" h-80 bg-cover bg-fixed"
            style={{ backgroundImage: `url("/image/mainbgg.jpg")` }}
          >
            <h1 style={{ fontFamily: "var(--heading-font)" }}>AR Customs</h1>
          </div>

        <p style={{ fontFamily: "var(--content-font)" }}>
          Whereas disregard and contempt for human rights have resulted
        </p>
        <div style={{ fontFamily: "var(--art-font)" }}>
          Art Content Something
        </div>
      </div>
    </div>
  );
};

export default AdminIndex;
