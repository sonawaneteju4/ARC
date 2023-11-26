import logo from "./logo.svg";
import "./App.css";
import LandingPage from "./Pages/LandingPage";
import Index from "./Components/LandingPage.js/Index";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import LoginComp from "./Components/LoginComp";
import TopNavbar from "./Components/LandingPage.js/TopNavbar";
import { useEffect, useState } from "react";
import PageNotFound from "./Components/Other/PageNotFound";
import LoginPage from "./Components/LandingPage.js/LoginPage";
  
function App() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
    };

    const handleOffline = () => {
      setIsOnline(false);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return isOnline ? <Redirect to="/" /> : <Redirect to="/noNetwork" />;
  return (
    <div>
      <BrowserRouter>
      <TopNavbar/>
        <Routes>
          <Route path="/" element={<Index />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/*" element={<PageNotFound/>} />

          {/* <LandingPage/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
