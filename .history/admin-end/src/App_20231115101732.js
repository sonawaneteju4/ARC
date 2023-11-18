import logo from "./logo.svg";
import "./App.css";
import LandingPage from "./Pages/LandingPage";
import Index from "./Components/LandingPage.js/Index";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginComp from "./Components/LoginComp";

function App() {
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
