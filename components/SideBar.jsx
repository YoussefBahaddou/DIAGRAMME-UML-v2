import React from "react";

const Sidebar = ({ onOpenClassModal }) => {
  return (
    <div className="h-screen w-64 flex flex-col justify-between p-4 bg-green-600 text-white shadow-lg rounded-r-lg">
      {/* Header */}
      <div>
        <div className="flex items-center justify-center mb-6">
          <div className="flex items-center space-x-2">
            <img
              src="/images/app_logo.png"
              alt="EMSI Logo"
              className="h-10 w-auto"
            />
          </div>
        </div>
        <p className="text-center text-sm font-semibold">UML Diagramme :</p>
        {/* Menu */}
        <ul className="mt-6 space-y-4">
          {/* Créer une classe with modal trigger */}
          <li
            onClick={onOpenClassModal}
            className="flex items-center p-3 rounded-lg transition-all duration-300 bg-green-600 hover:bg-green-700 cursor-pointer shadow-md hover:shadow-lg"
          >
            <i className="fas fa-home mr-3"></i>
            Créer une classe
          </li>

          {[
            { icon: "fa-chart-bar", text: "Créer une relation" },
            { icon: "fa-bell", text: "Générer code PHP" },
            { icon: "fa-chart-line", text: "Générer code Python" },
            { icon: "fa-heart", text: "Générer code Java" },
            { icon: "fa-wallet", text: "Exporter" },
          ].map((item, index) => (
            <li
              key={index}
              className="flex items-center p-3 rounded-lg transition-all duration-300 bg-green-600 hover:bg-green-700 cursor-pointer shadow-md hover:shadow-lg"
            >
              <i className={`fas ${item.icon} mr-3`}></i>
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;