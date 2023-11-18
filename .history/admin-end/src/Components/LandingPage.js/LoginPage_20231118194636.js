import React from "react";
import LoginComp from "../LoginComp";

const LoginPage = () => {
  return (
    <>
      <div
        className=" flex justify-center items-center mt  bg-cover "
        style={{
          backgroundImage: `url("")`,
        }}
      >

<div className="">
        <div className="backdrop-sepia-0 bg-black/40 backdrop-blur-sm drop-shadow-xl p-10 rounded-xl ">
            <LoginComp/>
            </div>
            </div>
      </div>
    </>
  );
};

export default LoginPage;
