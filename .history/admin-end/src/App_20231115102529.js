import logo from "./logo.svg";
import "./App.css";
import LandingPage from "./Pages/LandingPage";
import Index from "./Components/LandingPage.js/Index";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import LoginComp from "./Components/LoginComp";
import TopNavbar from "./Components/LandingPage.js/TopNavbar";
import { useEffect, useState } from "react";

function App() {
const [isLogin, setisLogin] = useState(false)
  return (
    <div>
      <BrowserRouter>
      <TopNavbar/>
        <Routes>
          <Route path="/" element={<Index />}></Route>
          <Route path="/login" element={<LoginComp />}></Route>
          {/* <LandingPage/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
