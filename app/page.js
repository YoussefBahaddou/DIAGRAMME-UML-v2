"use client";
import { useState } from "react";
import AddClassForm from "../components/AddClassForm";
import AddRelationForm from "../components/AddRelationForm";
import Diagram from "../components/Diagram";
import Sidebar from "@/components/Sidebar";
import Modal from "../components/ui/ModalClass";
import GeneratePHPCode from "../components/GeneratePHPCode";
import GenerateJavaCode from "../components/GenerateJavaCode";

const Page = () => {
  const [graph, setGraph] = useState(null);
  const [paper, setPaper] = useState(null);
  const [classes, setClasses] = useState([]); // Tracks classes
  const [relations, setRelations] = useState([]); // Tracks relations

  const [isClassModalOpen, setIsClassModalOpen] = useState(false);
  const [isRelationModalOpen, setIsRelationModalOpen] = useState(false);
  const [isPHPModalOpen, setIsPHPModalOpen] = useState(false);
  const [isJavaModalOpen, setIsJavaModalOpen] = useState(false);

  const handleOpenClassModal = () => setIsClassModalOpen(true);
  const handleCloseClassModal = () => setIsClassModalOpen(false);

  const handleOpenRelationModal = () => setIsRelationModalOpen(true);
  const handleCloseRelationModal = () => setIsRelationModalOpen(false);

  const handleOpenPHPModal = () => setIsPHPModalOpen(true);
  const handleClosePHPModal = () => setIsPHPModalOpen(false);

  const handleOpenJavaModal = () => setIsJavaModalOpen(true);
  const handleCloseJavaModal = () => setIsJavaModalOpen(false);

  return (
    <div className="flex">
      <Sidebar
        onOpenClassModal={handleOpenClassModal}
        onOpenRelationModal={handleOpenRelationModal}
        onGeneratePHPCodeModal={handleOpenPHPModal}
        onGenerateJavaCodeModal={handleOpenJavaModal}
      />
      <div className="flex-1 relative bg-emerald-50">
        <div className="flex flex-col items-center gap-8">
          {isClassModalOpen && (
            <Modal isOpen={isClassModalOpen} onClose={handleCloseClassModal}>
              <AddClassForm
                graph={graph}
                paper={paper}
                classes={classes}
                relations={relations}
                setClasses={setClasses}
                onClose={handleCloseClassModal}
              />
            </Modal>
          )}
          {isRelationModalOpen && (
            <Modal
              isOpen={isRelationModalOpen}
              onClose={handleCloseRelationModal}
            >
              <AddRelationForm
                graph={graph}
                classes={classes}
                relations={relations}
                setRelations={setRelations}
                onClose={handleCloseRelationModal}
              />
            </Modal>
          )}
          {isPHPModalOpen && (
            <Modal isOpen={isPHPModalOpen} onClose={handleClosePHPModal}>
              <GeneratePHPCode classes={classes} relations={relations} />
            </Modal>
          )}
          {isJavaModalOpen && (
            <Modal isOpen={isJavaModalOpen} onClose={handleCloseJavaModal}>
              <GenerateJavaCode classes={classes} relations={relations} />
            </Modal>
          )}
          <Diagram
            className="mb-6"
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
