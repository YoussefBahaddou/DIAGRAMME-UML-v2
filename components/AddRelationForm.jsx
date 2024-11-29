"use client";
import { useState } from 'react';
import * as joint from 'jointjs';

const AddRelationForm = ({ graph, classes }) => {
    const [sourceClass, setSourceClass] = useState('');
    const [targetClass, setTargetClass] = useState('');
    const [relationType, setRelationType] = useState('composition');

    const addRelation = (e) => {
        e.preventDefault();
        if (graph && sourceClass && targetClass && relationType) {
            const source = classes.find((c) => c.name === sourceClass);
            const target = classes.find((c) => c.name === targetClass);

            if (source && target) {
                let link;

                switch (relationType) {
                    case 'composition':
                        link = new joint.shapes.uml.Composition({ source: { id: source.cell.id }, target: { id: target.cell.id } });
                        break;
                    case 'aggregation':
                        link = new joint.shapes.uml.Aggregation({ source: { id: source.cell.id }, target: { id: target.cell.id } });
                        break;
                    case 'inheritance':
                        link = new joint.shapes.uml.Generalization({ source: { id: source.cell.id }, target: { id: target.cell.id } });
                        break;
                    default:
                        break;
                }

                graph.addCell(link);
            }
        }
    };

    return (
        <form onSubmit={addRelation} className="bg-gray-100 border border-gray-300 p-6 rounded-lg w-96 shadow-md">
            <h2 className="text-2xl font-semibold text-center mb-4">Ajouter une Relation</h2>
            <div className="mb-4">
                <label htmlFor="sourceClass" className="block text-sm font-medium text-gray-700">Classe Source</label>
                <select
                    id="sourceClass"
                    value={sourceClass}
                    onChange={(e) => setSourceClass(e.target.value)}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    required
                >
                    <option value="">Sélectionner une classe</option>
                    {classes.map((cls) => (
                        <option key={cls.name} value={cls.name}>{cls.name}</option>
                    ))}
                </select>
            </div>
            <div className="mb-4">
                <label htmlFor="targetClass" className="block text-sm font-medium text-gray-700">Classe Cible</label>
                <select
                    id="targetClass"
                    value={targetClass}
                    onChange={(e) => setTargetClass(e.target.value)}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    required
                >
                    <option value="">Sélectionner une classe</option>
                    {classes.map((cls) => (
                        <option key={cls.name} value={cls.name}>{cls.name}</option>
                    ))}
                </select>
            </div>
            <div className="mb-4">
                <label htmlFor="relationType" className="block text-sm font-medium text-gray-700">Type de Relation</label>
                <select
                    id="relationType"
                    value={relationType}
                    onChange={(e) => setRelationType(e.target.value)}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    required
                >
                    <option value="composition">Composition</option>
                    <option value="aggregation">Agrégation</option>
                    <option value="inheritance">Héritage</option>
                </select>
            </div>
            <button type="submit" className="w-full bg-green-600 text-white p-2 rounded-md hover:bg-green-700 transition">Ajouter la Relation</button>
        </form>
    );
};

export default AddRelationForm;
