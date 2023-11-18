import React from "react";
import LoginComp from "../LoginComp";

const LoginPage = () => {
  return (
    <div>
      <div
        className=" flex justify-center items-center h  bg-cover "
        style={{
          backgroundImage: `url("https://i.ibb.co/dmL4v2M/pexels-lukas-669619.jpg")`,
        }}
      >

<div className="">
        <div className="backdrop-sepia-0 bg-black/40 backdrop-blur-sm drop-shadow-xl p-10 rounded-xl ">
            <LoginComp/>
            </div>
            </div>
      </div>
    </div>
  );
};

export default LoginPage;
