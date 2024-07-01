import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./assets/logo_header.png";
import MobileFooter from "./assets/mobile_footer.png";
import Webfooter from "./assets/screen_footer.png";
import FirstLogin from "./components/FirstLogin";
import OtpPage from "./components/OtpPage";

function App() {
  return (
    <div className="App mx-auto">
        <div className="navbar flex justify-between bg-gov-blue md:p-4 py-4">
        <img className="md:w-80 md:h-24" src={Header} alt="" />
        <a href="/" className="text-blue-600 pt-6 md:pt-10 font-bold text-sm underline pr-3">Help</a>
        </div>
      <Router>
        <Routes>
          <Route path="/" element={<FirstLogin />} />
          <Route path="/mygov/$code" element={<OtpPage />} />
        </Routes>
      </Router>
      <div className="footer p-4 bg-black">
      <img className="md:hidden block" src={MobileFooter} alt="" />
      <img className="hidden md:block w-full" src={Webfooter} alt="" />
      </div>
       </div>
  );
}

export default App;
