import React from "react";
import "./Spinner.css";
// import loading from './Gear.gif'

const Spinner = () => {
  return (
    <div className="spinner">
      <div class="loader">
        <div class="loader-square"></div>
        <div class="loader-square"></div>
        <div class="loader-square"></div>
        <div class="loader-square"></div>
        <div class="loader-square"></div>
        <div class="loader-square"></div>
        <div class="loader-square"></div>
      </div>
      <p></p>
    </div>
  );
};

export default Spinner;
