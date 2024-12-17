"use client";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-green-600 text-white shadow-lg rounded-b-lg h-14 ">
      <div className="container mx-auto flex justify-between items-center py-3 px-6">
        {/* Left Section */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
          </div>
          <div className="flex items-center justify-center mb-6">
          <div className="flex items-center space-x-2">
            <img
              src="/images/app_logo.png"
              alt="App Logo"
              className="h-10 w-auto"
            />
          </div>
        </div>
         
        </div>
      
        
      </div>
    </nav>
  );
};

export default Navbar;
