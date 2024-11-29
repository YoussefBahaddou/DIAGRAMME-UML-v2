"use client";
import { useEffect } from 'react';
import * as joint from 'jointjs';

const Diagram = ({ graph, setGraph, paper, setPaper }) => {
    useEffect(() => {
        const newGraph = new joint.dia.Graph();
        const newPaper = new joint.dia.Paper({
            el: document.getElementById('myDiagram'),
            model: newGraph,
            width: 800,
            height: 600,
            gridSize: 10,
        });

        setGraph(newGraph);
        setPaper(newPaper);
    }, []);

    return <div id="myDiagram" className="border border-gray-300"></div>;
};

export default Diagram;
