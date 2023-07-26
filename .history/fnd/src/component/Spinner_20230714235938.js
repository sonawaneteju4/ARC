import React from "react";
import "./Spinner.css";
// import loading from './Gear.gif'

const Spinner = () => {
  return (
    <>
    <div className="spinner">
      <div className="flex">

      <div class="loader">
        <div class="loader-square"></div>
        <div class="loader-square"></div>
        <div class="loader-square"></div>
        <div class="loader-square"></div>
        <div class="loader-square"></div>
        <div class="loader-square"></div>
        <div class="loader-square"></div>
      </div>
      </div>
      <div className="">
      <p>Welcome TO Ar Customs</p>
      </div>
    </div>
    </>
  );
};

export default Spinner;
