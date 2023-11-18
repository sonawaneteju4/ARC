import React from "react";
import LoginComp from "../../../../fnd/src/component/LoginComp";

const LoginPage = () => {
  return (
    <div>
      <div
        className=" flex justify-center items-center h-screen  bg-cover "
        style={{
          backgroundImage: `url("/image/car2.jpg")`,
        }}
      >

<div className="mt-20 ">
        <div className="backdrop-sepia-0 bg-white/40 backdrop-blur-sm drop-shadow-xl p-10 rounded-xl ">
            <LoginComp/>
            </div>
            </div>
      </div>
    </div>
  );
};

export default LoginPage;
