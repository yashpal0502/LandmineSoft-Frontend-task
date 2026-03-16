import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/home/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";

const App = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  return (
    <div>
      {!isHome && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
