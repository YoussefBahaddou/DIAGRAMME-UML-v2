import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-green-600 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-2 px-4">
        {/* Left Section */}
        <div className="flex items-center space-x-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src="path/to/logo.png"
              alt="EMSI Logo"
              className="h-8 w-auto"
            />
            <span className="text-sm font-bold">
              ÉCOLE MAROCAINE DES <br />
              SCIENCES DE L’INGÉNIEUR
            </span>
          </div>
        </div>

        {/* Center Section */}
        <div className="flex space-x-8 text-sm">
          <a href="/emploi-du-temps" className="hover:underline">
            Emploi du temps
          </a>
          <div className="group relative">
            <button className="hover:underline">Absence</button>
            {/* Dropdown */}
            <div className="hidden group-hover:block absolute left-0 mt-1 bg-white text-black shadow-lg py-2 rounded">
              <a
                href="#absence-link1"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Link 1
              </a>
              <a
                href="#absence-link2"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Link 2
              </a>
            </div>
          </div>
          <div className="group relative">
            <button className="hover:underline">Discipline</button>
            {/* Dropdown */}
            <div className="hidden group-hover:block absolute left-0 mt-1 bg-white text-black shadow-lg py-2 rounded">
              <a
                href="#discipline-link1"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Link 1
              </a>
              <a
                href="#discipline-link2"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Link 2
              </a>
            </div>
          </div>
          <div className="group relative">
            <button className="hover:underline">Messages</button>
            {/* Dropdown */}
            <div className="hidden group-hover:block absolute left-0 mt-1 bg-white text-black shadow-lg py-2 rounded">
              <a
                href="#messages-link1"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Link 1
              </a>
              <a
                href="#messages-link2"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Link 2
              </a>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div>
          <button className="hover:underline text-sm">
            YOUSEF BAHDOU <span className="ml-1">▼</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
