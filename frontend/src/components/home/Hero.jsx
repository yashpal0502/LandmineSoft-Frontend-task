import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";
import { Briefcase, Info, LayersPlus, MenuIcon, X } from "lucide-react";

const Hero = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-50 via-white to-emerald-50 overflow-hidden pb-10">
      {/* Navbar */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 backdrop-blur-md bg-white/60 border border-white/40 shadow-lg rounded-full px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <img src={assets.logo} alt="" className="h-12 w-12 object-contain" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-10 font-medium text-gray-700">
          <Link to="/about" className="relative overflow-hidden h-6 group">
            <span className="block group-hover:-translate-y-full transition-transform duration-300">
              About
            </span>
            <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">
              About
            </span>
          </Link>
          <Link to="/about" className="relative overflow-hidden h-6 group">
            <span className="block group-hover:-translate-y-full transition-transform duration-300">
              Services
            </span>
            <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">
              Services
            </span>
          </Link>
          <Link to="/about" className="relative overflow-hidden h-6 group">
            <span className="block group-hover:-translate-y-full transition-transform duration-300">
              Careers
            </span>
            <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">
              Careers
            </span>
          </Link>
        </div>

        {/* Desktop Buttons */}

        <div className="hidden md:flex gap-4">
          <button
            onClick={() => navigate("/contact")}
            className="px-5 py-2 rounded-full border border-gray-300 hover:bg-gray-100 transition"
          >
            Contact
          </button>
          <button
            onClick={() => navigate("/login")}
            className="px-5 py-2 rounded-full bg-emerald-600 text-white hover:bg-emerald-700 transition shadow-md"
          >
            Log In
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuToggle(!menuToggle)}
          className="md:hidden"
        >
          {menuToggle ? <X size={25} /> : <MenuIcon size={25} />}
        </button>
      </nav>

      {/* Mobile Menu */}

      <div
        className={`fixed h-full max-md:w-60 flex flex-col text-lg px-8 pb-10 bg-white z-[100] transition duration-500 ${menuToggle ? "translate-x-0" : "-translate-x-full"}`}
      >
        <img src={assets.logo} alt="logo" className="w-24 pt-8" />

        <div
          onClick={() => setMenuToggle(false)}
          className="flex flex-col gap-6 my-10"
        >
          <Link
            to="/about"
            className="flex gap-3 items-center hover:text-emerald-600 transition"
          >
            <Info size={25} className="transition hover:scale-110" />
            <span className="text-md md:text-xl">About</span>
          </Link>
          <Link
            to="/Service"
            className="flex gap-3 items-center hover:text-emerald-600 transition"
          >
            <LayersPlus size={25} className="transition hover:scale-110" />
            <span className="text-md md:text-xl">Services</span>
          </Link>
          <Link
            to="/Careers"
            className="flex gap-3 items-center hover:text-emerald-600 transition"
          >
            <Briefcase size={25} className="transition hover:scale-110" />
            <span className="text-md md:text-xl">Careers</span>
          </Link>
        </div>

        <div className="flex flex-col px-5 gap-5 my-10">
          <button
            onClick={() => {
              navigate("/contact");
              setMenuToggle(!menuToggle);
            }}
            className="border border-gray-300 py-2 rounded-full hover:bg-slate-100 transition"
          >
            Contact
          </button>
          <button
            onClick={() => {
              navigate("/login");
              setMenuToggle(!menuToggle);
            }}
            className="border bg-emerald-600 text-white py-2 rounded-full hover:bg-emerald-700 transition"
          >
            Login
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="flex flex-col items-center text-center pt-40 px-6 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-700">
          Building Intelligent Products for a
          <span className="text-emerald-600"> Digital-First World</span>
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-3xl">
          We design and build AI-powered software, modern web platforms, and
          cloud-native solutions tailored to your business.
        </p>

        {/* CTA Buttons */}

        <div className="mt-10 flex flex-col sm:flex-row gap-5">
          <button className="px-8 py-4 rounded-full bg-emerald-600 text-white font-medium hover:bg-emerald-700 transition shadow-lg hover:shadow-xl">
            Schedule Free Consultation
          </button>
          <button className="px-8 py-4 rounded-full border border-gray-300 hover:bg-gray-100 transition">
            View Our Projects →
          </button>
        </div>

        {/* Learn More */}

        <button className="mt-12 text-sm text-emerald-600 hover:underline">
          Learn more ↓
        </button>
      </div>
    </div>
  );
};

export default Hero;
