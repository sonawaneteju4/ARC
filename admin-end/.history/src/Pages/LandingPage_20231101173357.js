import React, { useState } from "react";
import Spinner from "../Components/Spinner/Spinner";
import LoginComp from "../Components/LoginComp";

const LandingPage = () => {
  const [loading, setloading] = useState(true);

  setTimeout(() => {
    setloading(false);
  }, 1000);

  return (
    <div>
      <div>{loading && <Spinner />}</div>
      <div>
        <LoginComp/>
      </div>
    </div>
  );
};

export default LandingPage;
