import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/home/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Services from "./pages/Services";
import Careers from "./pages/Careers";
import ContactUs from "./pages/ContactUs";
import { Toaster } from "react-hot-toast";

const App = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  return (
    <div>
      <Toaster />
      {!isHome && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Services />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
