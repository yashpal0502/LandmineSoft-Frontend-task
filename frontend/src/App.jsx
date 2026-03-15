import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/home/Footer";
import Navbar from "./components/Navbar";

const App = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  return (
    <div>
      {!isHome && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
