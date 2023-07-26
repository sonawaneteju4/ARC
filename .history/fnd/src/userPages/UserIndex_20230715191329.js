import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../helper.js/Button";
import Spinner from "../component/Spinner";
import "../userPages/BoxShadow.css";

const Index = () => {
  const [getuser, setgetuser] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [showModal, setshowModal] = useState(false);
  let navigate = useNavigate();

  const UserDetails = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BASE_API}/auth/getuser`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token": sessionStorage.getItem("token"),
          },
        }
      );
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
    sessionStorage.removeItem("token");
    navigate("/login");
    // alert('You Are LogOut Now')
  };
  return (
    <div className="mt-16 h-screen">
      {Loading && <Spinner isHomePage={true} />}
      <div className="grid grid-cols-2 bg-white">
        <div className="px-5">
          <p className="pt-3  text-xl font-bold">Hey...{getuser.name} </p>
        </div>
        <div className="flex justify-end mr-10">
          {" "}
          <Button onClick={handleLogOut} value={"Logout"} />
        </div>
      </div>
      <hr></hr>
      <div className="flex lg:flex-row flex-col">
        <div className="basis-1/4 m-2   rounded-2xl">
          <img
            src="/image/admin.png"
            className="h-36 block ml-auto mr-auto imgShadow "
          ></img>
          <p className="text-center text-xs font-bold">{getuser.name}</p>
          <p className="text-center text-3xl font-bold">Profile</p>
          {/* <p className="text-center text-xs font-bold">{getuser.email}</p>
          <p className="text-center text-xs font-bold">{getuser.phone}</p> */}
        </div>
        <div className="basis-1/4 m-2 items-center">
          <img
            className="h-40 block ml-auto mr-auto imgShadow"
            src="/image/orders.png"
            alt=""
          />
          <p className="text-center text-3xl font-bold">Orders</p>
        </div>
        <div className="basis-1/4 m-2">
          <img
            className="h-40 block ml-auto mr-auto imgShadow"
            src="/image/qt.png"
            alt=""
          />
          <p className="text-center text-3xl font-bold">Quote Responce</p>
        </div>
        <div className="basis-1/4 m-2">
        <img
            className="h-40 block ml-auto mr-auto imgShadow"
            src="/image/so.png"
            alt=""
          />
          <p className="text-center text-3xl font-bold">Special Offer For You</p>
        </div>
      </div>
      <hr />
      <div className="flex justify-center mt-5">
          <h1 className="text-4xl font-extrabold">Book Service</h1>

      </div>
    </div>
  );
};

export default Index;
