import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../helper.js/Logo";
import Spinner from "./Spinner";
import AlertModal from "../admin/AlertModal";


const LoginComp = ({ link, onClose, onLoginSuccess, setloading }) => {
  const [credentails, setCredentails] = useState({ email: "", password: "" });
  let navigate = useNavigate();
  const [errMessage, seterrMessage] = useState(" ");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `${process.env.REACT_APP_BASE_API}/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: credentails.email,
          password: credentails.password,
        }),
      }
    );
    const json = await response.json();
    console.log(json);
    if (json.success) {
      sessionStorage.setItem("token", json.authtoken);
      navigate('link');
      setTimeout(() => {
        setloading(false);
      }, 1000);      
      if (onClose) {
        onClose();
      }
      if (onLoginSuccess){
        onLoginSuccess();
      }
    } else {
      setloading(false);
      alert("Enter Correct Details")
    }
  };

  const onChange = (e) => {
    setCredentails({ ...credentails, [e.target.name]: e.target.value });
  };

  return (
    <div>
      
      <form onSubmit={handleSubmit} className="lg:w-96 w-full">
        {/* <p className=" text-black text-4xl pb-5 font-serif font-extrabold text-center">AR COUSTOMS</p> */}
        <div className="flex justify-center">
          <img src="/image/ar.png" className="h-40 /30"></img>
          {/* <Logo/> */}
        </div>
        {/* Email input */}
        <div className="mb-6">
          <input
            type="email"
            name="email"
            onChange={onChange}
            value={credentails.email}
            className="form-control block w-full px-4 py-2 text-xl font-normal text-white bg-black bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-black focus:border-blue-600 focus:outline-none"
            placeholder="Email address"
          />
        </div>
        {/* Password input */}
        <div className="mb-6">
          <input
            id="password"
            type="password"
            name="password"
            onChange={onChange}
            required
            value={credentails.password}
            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Password"
          />
        </div>
        <div className="flex justify-between items-center mb-6">
          <div className="form-group form-check">
            {/* <input
                      type="checkbox"
                      className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      id="exampleCheck3"
                      defaultChecked
                    />
                    <label
                      className="form-check-label text-gray-800 hidden"
                      htmlFor="exampleCheck2"
                    >
                      Remember me
                    </label> */}
          </div>
          <a
            href="#!"
            className="text-black font-bold hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
          >
            Forgot password?
          </a>
        </div>
        <small className="text-red-500 mt-2 font-extrabold">{errMessage}
</small>
        {/* Submit button */}
        <button
          type="submit"
          className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
        >
          Sign in
        </button>
        <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
          <p className="text-center font-semibold mx-4 mb-0">OR</p>
        </div>
      </form>
     
    </div>
  );
};

export default LoginComp;
