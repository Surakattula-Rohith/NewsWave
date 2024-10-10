import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.jpg";

const NavBar = () => {
  return (
    <>
      <header className="bg-gray-800 text-white fixed top-0 left-0 w-full z-10">
        <nav className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center">
              <img 
                src={Logo} 
                alt="Logo" 
                className="h-10 w-auto max-h-full border border-white rounded"
              />
              <span className="ml-2 text-2xl font-bold">NewsWave</span> {/* Added NewsWave text */}
            </Link>
            
            <div className="flex space-x-8 items-center">
              <Link to="/publishers" className="text-xl font-bold hover:text-gray-300 transition duration-300">
                Publishers
              </Link>
              <Link to="/personalinfo" className="text-xl font-bold hover:text-gray-300 transition duration-300">
                Personal Info
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <div className="h-10"></div> {/* This div adds padding below the navbar */}
    </>
  );
};

export default NavBar;
