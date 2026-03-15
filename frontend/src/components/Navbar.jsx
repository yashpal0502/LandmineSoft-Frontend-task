import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const navigate = useNavigate();
  return (
    <nav className="flex items-center border bg-gray-50 justify-between border-slate-700 px-6 py-4 text-white text-sm">
      <Link to="/">
        <img
          src={assets.logo}
          alt="logo"
          className="h-12 w-12 object-contain"
        />
      </Link>
      <div className="hidden md:flex items-center gap-6 ml-7 text-black">
        <Link to="/about" className="relative overflow-hidden h-6 group">
          <span className="block group-hover:-translate-y-full transition-transform duration-300">
            About
          </span>
          <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">
            About
          </span>
        </Link>
        <Link to="/service" className="relative overflow-hidden h-6 group">
          <span className="block group-hover:-translate-y-full transition-transform duration-300">
            Services
          </span>
          <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">
            Services
          </span>
        </Link>
        <Link to="careers" className="relative overflow-hidden h-6 group">
          <span className="block group-hover:-translate-y-full transition-transform duration-300">
            Careers
          </span>
          <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">
            Careers
          </span>
        </Link>
      </div>

      <div className="hidden md:flex gap-4">
        <button
          onClick={() => navigate("/contact")}
          className="px-5 py-2 rounded-full border border-gray-300 hover:bg-gray-100 transition text-black"
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

      <button
        onClick={() => setMenuToggle(!menuToggle)}
        className="md:hidden text-gray-600"
      >
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <div
        className={`fixed inset-0 h-full bg-white text-black flex flex-col items-center justify-center gap-8 text-lg font-medium transition-transform duration-500 md:hidden z-40 ${
          menuToggle ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <button
          className="absolute top-6 right-6"
          onClick={() => setMenuToggle(false)}
        >
          <img src={assets.closeIcon} alt="close" className="h-6" />
        </button>

        <Link to="/about" onClick={() => setMenuToggle(false)}>
          About
        </Link>
        <Link to="/service" onClick={() => setMenuToggle(false)}>
          Services
        </Link>
        <Link to="/careers" onClick={() => setMenuToggle(false)}>
          Careers
        </Link>

        <button
          onClick={() => {
            navigate("/contact");
            setMenuToggle(!menuToggle);
          }}
          className="px-6 py-2 rounded-full border border-gray-300"
        >
          Contact
        </button>
        <button
          onClick={() => {
            navigate("/login");
            setMenuToggle(!menuToggle);
          }}
          className="px-6 py-2 rounded-full bg-emerald-600 text-white"
        >
          Log In
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
