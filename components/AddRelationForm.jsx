"use client";
import { useState } from "react";
import * as joint from "jointjs";

const AddRelationForm = ({ graph, classes, relations, setRelations, onClose }) => {
  const [sourceClass, setSourceClass] = useState("");
  const [targetClass, setTargetClass] = useState("");
  const [relationType, setRelationType] = useState("composition");

  const addRelation = (e) => {
    e.preventDefault();
    if (graph && sourceClass && targetClass && relationType) {
      const source = classes.find((c) => c.name === sourceClass);
      const target = classes.find((c) => c.name === targetClass);
  
      if (source && target) {
        let link;
  
        switch (relationType) {
                  case "composition":
          link = new joint.shapes.uml.Composition({
            source: { id: source.cell.id },
            target: { id: target.cell.id },
          });
          // Save composition relation
          setRelations([

            ...relations,
            { source: sourceClass, target: targetClass, type: "composition" },
          ]);
          break;

          case "aggregation":
            link = new joint.shapes.uml.Aggregation({
              source: { id: source.cell.id },
              target: { id: target.cell.id },
            });
            // Save aggregation relation
            setRelations([
              ...relations,
              { source: sourceClass, target: targetClass, type: "aggregation" },
            ]);
            break;
          case "inheritance":
            link = new joint.shapes.uml.Generalization({
              source: { id: source.cell.id },
              target: { id: target.cell.id },
            });
            // Save inheritance relation
            setRelations([
              ...relations,
              { source: sourceClass, target: targetClass, type: "inheritance" },
            ]);
            break;
          default:
            break;
        }
  
        graph.addCell(link);
      }
    }
  };
  
  return (
    <form
      onSubmit={addRelation}
      className="bg-gray-100 border border-gray-300 p-6 rounded-lg w-96 shadow-md"
    >
      {/* Form Header with Close Button */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Ajouter une Relation</h2>
        <button
          type="button"
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
      </div>

      {/* Classe Source Selection */}
      <div className="mb-4">
        <label htmlFor="sourceClass" className="block text-sm font-medium text-gray-700">
          Classe Source
        </label>
        <select
          id="sourceClass"
          value={sourceClass}
          onChange={(e) => setSourceClass(e.target.value)}
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
          required
        >
          <option value="">Sélectionner une classe</option>
          {classes.map((cls) => (
            <option key={cls.name} value={cls.name}>
              {cls.name}
            </option>
          ))}
        </select>
      </div>

      {/* Classe Cible Selection */}
      <div className="mb-4">
        <label htmlFor="targetClass" className="block text-sm font-medium text-gray-700">
          Classe Cible
        </label>
        <select
          id="targetClass"
          value={targetClass}
          onChange={(e) => setTargetClass(e.target.value)}
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
          required
        >
          <option value="">Sélectionner une classe</option>
          {classes.map((cls) => (
            <option key={cls.name} value={cls.name}>
              {cls.name}
            </option>
          ))}
        </select>
      </div>

      {/* Type de Relation Selection */}
      <div className="mb-4">
        <label htmlFor="relationType" className="block text-sm font-medium text-gray-700">
          Type de Relation
        </label>
        <select
          id="relationType"
          value={relationType}
          onChange={(e) => setRelationType(e.target.value)}
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
          required
        >
          <option value="composition">Composition</option>
          <option value="aggregation">Agrégation</option>
          <option value="inheritance">Héritage</option>
        </select>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-green-600 text-white p-2 rounded-md hover:bg-green-700 transition"
      >
        Ajouter la Relation
      </button>
    </form>
  );
};

export default AddRelationForm;