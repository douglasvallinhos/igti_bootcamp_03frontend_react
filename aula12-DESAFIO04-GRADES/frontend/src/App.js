import React, { useState, useEffect } from 'react';
import * as api from './api/apiService';
import Spinner from './components/Spinner';
import GradesControl from './components/GradesControl';
import ModalGrade from './components/ModalGrade';

export default function App() {
  const [allGrades, setAllGrades] = useState([]);
  const [selectedGrade, setSelectedGrade] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const getGrades = async () => {
      const grades = await api.getAllGrades();
      setTimeout(() => {
        setAllGrades(grades);
      }, 2000);
    };
    getGrades();

    return () => {};
  }, []);

  const handleDelete = async (gradeToDelete) => {
    const isDeleted = await api.deleteGrade(gradeToDelete);
    if (isDeleted) {
      const deleteGradeIndex = allGrades.findIndex(
        (grade) => grade.id === gradeToDelete.id
      );
      const newGrades = Object.assign([], allGrades);
      newGrades[deleteGradeIndex].isDeleted = true;
      newGrades[deleteGradeIndex].value = 0;
      setAllGrades(newGrades);
    }
  };
  const handlePersist = (grade) => {
    setSelectedGrade(grade);
    setIsModalOpen(true);
  };
  const handlePersistData = async (formData) => {
    const { id, newValue } = formData;
    const newGrades = Object.assign([], allGrades);

    const gradeToPersist = newGrades.find((grade) => grade.id === id);
    gradeToPersist.value = newValue;

    if (gradeToPersist.isDeleted) {
      await api.insertGrade(gradeToPersist);
      gradeToPersist.isDeleted = false;
    } else {
      await api.updateGrade(gradeToPersist);
    }

    setIsModalOpen(false);
  };
  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <h1 className="center">Controle de Notas</h1>
      {allGrades.length === 0 && <Spinner />}
      {allGrades.length > 0 && (
        <GradesControl
          grades={allGrades}
          onDelete={handleDelete}
          onPersist={handlePersist}
        />
      )}
      {isModalOpen && (
        <ModalGrade
          onSave={handlePersistData}
          onClose={handleClose}
          selectedGrade={selectedGrade}
        />
      )}
    </>
  );
}
