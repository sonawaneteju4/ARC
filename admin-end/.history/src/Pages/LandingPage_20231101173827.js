import React, { useState } from "react";
import Spinner from "../Components/Spinner/Spinner";
import LoginComp from "../Components/LoginComp";

const LandingPage = () => {
  const [loading, setloading] = useState(true);

  setTimeout(() => {
    setloading(false);
  }, 1000);

  return (
    <div
    className="bg-gray-600 flex justify-center items-center h-screen  bg-cover "
    
    style={{
      backgroundImage: `url("/image/car2.jpg")`,
    }}
  >
    {loading && <Spinner isHomePage={true} />}
    <div className="mt-20 ">
      <div className="backdrop-sepia-0 bg-white/40 backdrop-blur-sm drop-shadow-xl p-10 rounded-xl ">
        <LoginComp link={"/user"} setloading={setloading} />

      </div>
    </div>
    <div>
    
    </div>
  </div>
  );
};

export default LandingPage;
