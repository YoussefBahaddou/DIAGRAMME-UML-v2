"use client";

import { useState } from "react";
import AddClassForm from "../components/AddClassForm";
import AddRelationForm from "../components/AddRelationForm";
import Diagram from "../components/Diagram";
import Navbar from "@/components/navBar";
import Sidebar from "@/components/Sidebar";

const Page = () => {
  const [graph, setGraph] = useState(null);
  const [paper, setPaper] = useState(null);
  const [classes, setClasses] = useState([]);

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 relative bg-emerald-50">
        <Navbar />
        <div className="flex flex-col items-center gap-8">
          <div className="flex gap-8">
            <AddClassForm
              graph={graph}
              paper={paper}
              classes={classes}
              setClasses={setClasses}
            />
            <AddRelationForm graph={graph} classes={classes} />
          </div>
          <Diagram
            graph={graph}
            setGraph={setGraph}
            paper={paper}
            setPaper={setPaper}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
