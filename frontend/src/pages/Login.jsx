import { Eye, EyeOff, Lock, LogIn, Mail, User, UserPlus } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [mode, setMode] = useState("login");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-md p-6 md:p-8">
        <div className="flex bg-gray-100 rounded-lg mb-6 p-1">
          <button
            onClick={() => setMode("login")}
            className={`flex-1 flex gap-2 items-center justify-center py-2 rounded-md transition ${mode === "login" ? "bg-white shadow text-[#009966]" : "text-gray-500"}`}
          >
            <LogIn size={18} />
            Login
          </button>
          <button
            onClick={() => setMode("register")}
            className={`flex-1 flex gap-2 items-center justify-center py-2 rounded-md transition ${mode === "register" ? "bg-white shadow text-[#009966]" : "text-gray-500"}`}
          >
            <UserPlus size={18} />
            Register
          </button>{" "}
        </div>

        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          {mode === "login" ? "Welcome Back" : "Create Account"}
        </h2>

        {mode === "register" && (
          <div className="flex gap-2 items-center border rounded-lg px-3 py-2 mb-4">
            <User size={18} className="text-gray-400" />
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full outline-none"
            />
          </div>
        )}

        <div className="flex gap-2 items-center border rounded-lg px-3 py-2 mb-4">
          <Mail size={18} className="text-gray-400" />
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full outline-none"
          />
        </div>

        <div className="flex gap-2 items-center border rounded-lg px-3 py-2 mb-4">
          <Lock size={18} className="text-gray-400" />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            className="w-full outline-none"
          />
          <button type="button" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? (
              <EyeOff size={18} className="text-gray-400" />
            ) : (
              <Eye size={18} className="text-gray-400" />
            )}
          </button>
        </div>

        {mode === "login" && (
          <div className="text-right text-sm mb-5">
            <a href="#" className="text-[#ff9800] hover:underline">
              Forgot password?
            </a>
          </div>
        )}

        <button
          onClick={() => navigate("/")}
          className={`w-full bg-[#009966] text-white rounded-lg py-3 hover:bg-[#ff9800] transition mb-4 ${mode === "register" ? "mt-3" : ""}`}
        >
          {mode === "login" ? "Login" : "Register"}
        </button>
      </div>
    </div>
  );
};

export default Login;
