import React from 'react'
import { BsList } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { BsBadgeAr } from "react-icons/bs";



const TopNavbar = () => {
  return (
    <div>
        <div className=" w-screen h-16 bg-slate-100 flex justify-between">
        <div className=" flex items-center">
          {/* side bar spreader and Brand Name */}
          <div className="text-4xl pl-5">
            <BsBadgeAr className='text-yellow-300' />
          </div>
          <p className="text-2xl pl-4">AR CUSTOMS</p>
        </div>
        <div  className=" flex items-center cursor-pointer">
          {/* side bar spreader and Brand Name */}
          <div className="text-xl ">
            <FiLogOut />
          </div>
          <p className="text-lg pl-1 pr-6">Log Out</p>
        </div>
      </div>

    </div>
  )
}

export default TopNavbar