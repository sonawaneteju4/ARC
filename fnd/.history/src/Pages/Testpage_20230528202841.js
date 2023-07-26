import React from "react";
import { FaDirections } from 'react-icons/fa';

const Testpage = () => {
  return (
    <div className="h-screen mt-24">
      <div>
        <button className="flex justify-center  bg-black text-white px-5 py-2 rounded-full hover:bg-gray-500 active:bg-stone-400 active:text-black">
          {" "}
          Direction
          <span className="pl-2 mt-1">

          <FaDirections className=""/>
          </span>
        </button>
        <button className="flex justify-center  bg-black text-white px-5 py-2 rounded-full hover:bg-gray-500 active:bg-stone-400 active:text-black">
          {" "}
          Direction
          <span className="pl-2 mt-1">

          <FaDirections className=""/>
          </span>
        </button>
      </div>
      <div></div>
    </div>
  );
};

export default Testpage;
