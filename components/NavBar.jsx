import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-green-600 text-white shadow-lg rounded-b-lg">
      <div className="container mx-auto flex justify-between items-center py-3 px-6">
        {/* Left Section */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
          </div>
          <h1 className="text-lg font-semibold">Application UML</h1>
        </div>
        {/* Right Section */}
        <div>
          <button className="hover:bg-green-700 px-4 py-2 rounded-md transition-all duration-300 shadow-md hover:shadow-lg">
            GROUPE 8 <span className="ml-1">▼</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
