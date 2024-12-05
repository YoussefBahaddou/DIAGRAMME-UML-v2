"use client";
import { useState } from 'react';
import AddClassForm from '../components/AddClassForm';
import AddRelationForm from '../components/AddRelationForm';
import Diagram from '../components/Diagram';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import Modal from '../components/ui/ModalClass';

const Page = () => {
  const [graph, setGraph] = useState(null);
  const [paper, setPaper] = useState(null);
  const [classes, setClasses] = useState([]);
  const [isClassModalOpen, setIsClassModalOpen] = useState(false);

  const handleOpenClassModal = () => setIsClassModalOpen(true);
  const handleCloseClassModal = () => setIsClassModalOpen(false);

  return (
    <div className="flex">
      <Sidebar onOpenClassModal={handleOpenClassModal} />
      <div className="flex-1 relative bg-emerald-50">
        <Navbar />
        <div className="flex flex-col items-center gap-8">
        <Modal isOpen={isClassModalOpen} onClose={handleCloseClassModal}>
          <AddClassForm
            graph={graph}
            paper={paper}
            classes={classes}
            setClasses={setClasses}
            onClose={handleCloseClassModal}
          />
        </Modal>
          <AddRelationForm graph={graph} classes={classes} />
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