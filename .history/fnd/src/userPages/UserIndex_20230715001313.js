import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../helper.js/Button";


const Index = () => {
  const [getuser, setgetuser] = useState([]);
  const [Loading, setLoading] = useState(false)
  const [showModal, setshowModal] = useState(false)
  let navigate = useNavigate();

  const UserDetails = async () => {
    setLoading(true);
    try {
      
      const res = await fetch(`${process.env.REACT_APP_BASE_API}/auth/getuser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": sessionStorage.getItem("token"),
        },
      });
      const data = await res.json();
      setgetuser(data);
      console.log(data);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      UserDetails();
    } else {
      navigate("/login");
    }
  }, []);
  const handleLogOut = () => {
    setTimeout(() => {
      setLoading(true);
    }, 100);
    sessionStorage.removeItem("token");
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    navigate("/login");
    // alert('You Are LogOut Now')
  };
  return (
    <div className="mt-16">
      {Loading ?? <S}
      <div className="grid grid-cols-2 bg-white">
        <div className="px-5">
          <p className="pt-3  text-xl font-bold">Hey...{getuser.name} </p>
        </div>
        <div className="flex justify-end mr-10">
          {" "}
          <Button onClick={handleLogOut} value={"Logout"}/>
        </div>
      </div>
      <hr></hr>
      <div className="flex lg:flex-row flex-col">
        <div className="basis-1/4 m-2  bg-white rounded-2xl">
          <img
            src="/image/admin.png"
            className="h-40 block ml-auto mr-auto "
          ></img>
          <p className="text-center text-2xl font-bold">{getuser.name}</p>
          <p className="text-center text-2xl font-bold">{getuser.email}</p>
          <p className="text-center text-2xl font-bold">{getuser.phone}</p>
        </div>
        <div className="basis-1/4 m-2">Orders</div>
        <div className="basis-1/4 m-2">Quote Responce</div>
        <div className="basis-1/4 m-2">Special Offer For You</div>
    
    </div>
      <div>
</div>
    </div>
  );
};

export default Index;
