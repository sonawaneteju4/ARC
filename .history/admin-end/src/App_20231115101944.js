import logo from "./logo.svg";
import "./App.css";
import LandingPage from "./Pages/LandingPage";
import Index from "./Components/LandingPage.js/Index";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginComp from "./Components/LoginComp";
import TopNavbar from "./Components/LandingPage.js/TopNavbar";

function App() {
  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      //Do Nothing
    } else {
      navigate("/login");
    }
  }, []);
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
