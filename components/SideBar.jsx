import React from "react";

const Sidebar = ({ 
  onOpenClassModal, 
  onOpenRelationModal, 
  onGeneratePHPCodeModal, 
  onGenerateJavaCodeModal 
}) => {
  return (
    <div className="h-screen w-64 flex flex-col justify-start p-4 bg-green-600 text-white shadow-lg rounded-r-lg">
      {/* Logo Section - En Haut */}
      <div className="flex items-center justify-center mb-4">
        <img
          src="/images/app_logo.png" // Mets ici le chemin correct pour le logo EMSI
          alt="EMSI Logo"
          className="h-12 w-auto" // Ajuste la taille selon tes besoins
        />
      </div>

      {/* Titre Sidebar */}
      <p className="text-center text-sm font-semibold mb-6">UML Diagramme :</p>

      {/* Menu Principal */}
      <ul className="space-y-4">
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
          className="flex items-center p-3 rounded-lg transition-all duration-300 bg-green-700 hover:bg-green-800 cursor-pointer shadow-md hover:shadow-lg"
        >
          <i className="fas fa-coffee mr-3"></i>
          Générer code PHP
        </li>

        <li
          onClick={onGenerateJavaCodeModal}
          className="flex items-center p-3 rounded-lg transition-all duration-300 bg-green-700 hover:bg-green-800 cursor-pointer shadow-md hover:shadow-lg"
        >
          <i className="fas fa-coffee mr-3"></i>
          Générer code Java
        </li>

        <li className="flex items-center p-3 rounded-lg transition-all duration-300 bg-green-700 hover:bg-green-800 cursor-pointer shadow-md hover:shadow-lg">
          <i className="fas fa-coffee mr-3"></i>
          Générer code Python
        </li>

        <li className="flex items-center p-3 rounded-lg transition-all duration-300 bg-green-700 hover:bg-green-800 cursor-pointer shadow-md hover:shadow-lg">
          <i className="fas fa-download mr-3"></i>
          Export
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
