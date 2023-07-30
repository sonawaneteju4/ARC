import React from "react";
import DOMPurify from "dompurify";

const InstaEmb = () => {
  

  return (
   <>
   <img
              src={items.link}
              alt={items.title}
              className=" rounded hover:contrast-50"
              onClick={() => setshowMoadl(true)}
            ></img>
   </>
  );
};

export default InstaEmb;
