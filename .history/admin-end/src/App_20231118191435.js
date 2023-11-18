import logo from "./logo.svg";
import "./App.css";
import LandingPage from "./Pages/LandingPage";
import Index from "./Components/LandingPage.js/Index";
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import LoginComp from "./Components/LoginComp";
import TopNavbar from "./Components/LandingPage.js/TopNavbar";
import { useEffect, useState } from "react";
import PageNotFound from "./Components/Other/PageNotFound";



const isAuthenticated = () => {
  // Implement your authentication logic here, e.g., checking for a valid token
  return !!sessionStorage.getItem('token'); // Assuming token presence indicates authentication
};

// ProtectedRoute component to wrap protected routes
const ProtectedRoute = ({ element: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      element={isAuthenticated() ? <Component /> : <Navigate to="/login" />}
    />
  );
};



function App() {

  return (
    <div>
      <BrowserRouter>
      <TopNavbar/>
        <Routes>
          <Route path="/" element={<Index />}></Route>
          <Route path="/login" element={<LoginComp />}></Route>
          <Route path="/*" element={<PageNotFound/>} />
          <ProtectedRoute path="/protected" element={<ProtectedComponent />} />

          {/* <LandingPage/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
