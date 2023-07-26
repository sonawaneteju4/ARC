import React from "react";
import "./Spinner.css";
// import loading from './Gear.gif'

const Spinner = ({isHomePage = false}) => {
  return (
    <>
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
      <p className="m-5 text-3xl ml-16" style={{fontWeight:"bold"}} >
          {isHomePage ? "Welcome to AR CUSTOMS" : "Ar Customs"}
        </p>    </div>
    </>
  );
};

export default Spinner;
