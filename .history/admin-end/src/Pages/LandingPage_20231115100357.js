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
    {loading && <Spinner isHomePage={true} />
    <div>
    
    </div>
  </div>
  );
};

export default LandingPage;
