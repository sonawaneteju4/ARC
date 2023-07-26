import React from "react";
import "./Spinner.css";
// import loading from './Gear.gif'

const Spinner = ({isHomePage = false, isAdminPage = false, userName}) => {
  return (
    <>
    <div className="spinner">
      <div class="loader">
        <div class="loader-square color1"></div>
        <div class="loader-square color2"></div>
        <div class="loader-square color3"></div>
        <div class="loader-square color4"></div>
        <div class="loader-square color5"></div>
        <div class="loader-square color6"></div>
        <div class="loader-square color7"></div>
      </div>
      <p className="m-5 text-3xl ml-16" style={{fontWeight:"bold"}} >
      {
  isHomePage ? "Welcome to AR CUSTOMS" : isAdminPage ? "Welcome Admin | AR CUSTOMS" : "AR CUSTOMS"
}
        </p>    </div>
    </>
  );
};

export default Spinner;
