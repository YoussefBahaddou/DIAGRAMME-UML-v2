import React from "react";

const Sidebar = ({ 
  onOpenClassModal, 
  onOpenRelationModal, 
  onGeneratePHPCodeModal, 
  onGenerateJavaCodeModal 
}) => {
  return (
    <div className="h-screen w-64 flex flex-col justify-between p-4 bg-green-600 text-white shadow-lg rounded-r-lg">
      
      <div>
        <div className="flex items-center justify-center mb-6">
          <div className="flex items-center space-x-2">
            <img
              src="/images/app_logo.png"
              alt="App Logo"
              className="h-10 w-auto"
            />
          </div>
        </div>
        <p className="text-center text-sm font-semibold">UML Diagramme :</p>

        <ul className="mt-6 space-y-4">
          <li
            onClick={onOpenClassModal}
            className="flex items-center p-3 rounded-lg transition-all duration-300 bg-green-600 hover:bg-green-700 cursor-pointer shadow-md hover:shadow-lg"
          >
            <i className="fas fa-plus mr-3"></i>
            Créer une classe
          </li>

          <li
            onClick={onOpenRelationModal}
            className="flex items-center p-3 rounded-lg transition-all duration-300 bg-green-600 hover:bg-green-700 cursor-pointer shadow-md hover:shadow-lg"
          >
            <i className="fas fa-link mr-3"></i>
            Créer une relation
          </li>

          <li
            onClick={onGeneratePHPCodeModal}
            className="flex items-center p-3 rounded-lg transition-all duration-300 bg-blue-600 hover:bg-blue-700 cursor-pointer shadow-md hover:shadow-lg"
          >
            <i className="fas fa-code mr-3"></i>
            Générer code PHP
          </li>

          <li
          onClick={onGenerateJavaCodeModal}
            className="flex items-center p-3 rounded-lg transition-all duration-300 bg-green-700 hover:bg-green-800 cursor-pointer shadow-md hover:shadow-lg"
          >
            <i className="fas fa-coffee mr-3"></i>
            Générer code Java
          </li>
          <li
            
            className="flex items-center p-3 rounded-lg transition-all duration-300 bg-green-700 hover:bg-green-800 cursor-pointer shadow-md hover:shadow-lg"
          >
            <i className="fas fa-coffee mr-3"></i>
            Générer code Phyton
          </li>
          <li
          
            className="flex items-center p-3 rounded-lg transition-all duration-300 bg-green-700 hover:bg-green-800 cursor-pointer shadow-md hover:shadow-lg"
          >
            <i className="fas fa-coffee mr-3"></i>
            Export
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
