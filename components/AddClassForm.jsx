"use client";
import { useState } from 'react';
import * as joint from 'jointjs';

const AddClassForm = ({ graph, paper, classes, setClasses, onClose }) => {
  const [className, setClassName] = useState('');
  const [attributes, setAttributes] = useState('');
  const [methods, setMethods] = useState('');

  const addClassToDiagram = (e) => {
    e.preventDefault();
    if (graph && paper) {
      const uml = joint.shapes.uml;

      const newClass = new uml.Class({
        position: { x: 100 + classes.length * 200, y: 50 },
        size: { width: 180, height: 150 },
        name: className,
        attributes: attributes.split('\n'),
        methods: methods.split('\n'),
      });

      graph.addCell(newClass);
      setClasses([...classes, { name: className, cell: newClass }]);
      
      // Clear form fields
      setClassName('');
      setAttributes('');
      setMethods('');

      // Close the modal
      onClose();
    }
  };

  return (
    <form onSubmit={addClassToDiagram} className="bg-gray-100 border border-gray-300 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-center mb-4">Ajouter une Classe UML</h2>

      <div className="mb-4">
        <label htmlFor="className" className="block text-sm font-medium text-gray-700">Nom de la Classe</label>
        <input
          type="text"
          id="className"
          value={className}
          onChange={(e) => setClassName(e.target.value)}
          className="mt-1 p-2 block w-full border rounded-md focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          placeholder="Nom de la classe"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="attributes" className="block text-sm font-medium text-gray-700">Attributs</label>
        <textarea
          id="attributes"
          value={attributes}
          onChange={(e) => setAttributes(e.target.value)}
          rows="3"
          className="mt-1 p-2 block w-full border rounded-md focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          placeholder="+age: int\n+gender: String"
        />
        <small className="text-gray-500">Séparer chaque attribut par un saut de ligne.</small>
      </div>

      <div className="mb-4">
        <label htmlFor="methods" className="block text-sm font-medium text-gray-700">Méthodes</label>
        <textarea
          id="methods"
          value={methods}
          onChange={(e) => setMethods(e.target.value)}
          rows="3"
          className="mt-1 p-2 block w-full border rounded-md focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          placeholder="+isMammal()\n+mate()"
        />
        <small className="text-gray-500">Séparer chaque méthode par un saut de ligne.</small>
      </div>

      <div className="flex justify-between">
        <button type="submit" className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 w-1/2 mr-2">
          Ajouter la Classe
        </button>
        <button
          type="button"
          onClick={onClose}
          className="bg-gray-400 text-white p-2 rounded-md hover:bg-gray-500 w-1/2 ml-2"
        >
          Annuler
        </button>
      </div>
    </form>
  );
};

export default AddClassForm;
