import React, { useState } from "react";
import Spinner from "../Components/Spinner/Spinner";

const LandingPage = () => {
  const [loading, setloading] = useState(true);

  setTimeout(() => {
    setloading(false);
  }, 1000);

  return (
    <div>
      {loading && <Spinner />}
    </div>
  );
};

export default LandingPage;
