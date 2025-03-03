import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import IndividualEducationFieldset from "./IndividualEducationFieldset";

interface IndividualEducationState {
  id: string;
  canEdit: boolean;
  schoolNameAnswer: string;
  majorAnswer: string;
  graduationYearAnswer: string;
}

const EducationInfoFieldsets = () => {
  const [individualEducationStates, setIndividualEducationStates] = useState<
    IndividualEducationState[]
  >([]);

  const handleAddEducation = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const newId: string = uuidv4();
    const newEducationState : IndividualEducationState = {
      id: newId,
      canEdit: true,
      schoolNameAnswer: "",
      majorAnswer: "",
      graduationYearAnswer: "",
    };
    setIndividualEducationStates((prev) => [...prev, newEducationState]);
  };

  return (
    <fieldset className="flex flex-col items-start justify-start p-4 bg-gray-200 rounded-md shadow-lg">
      <h2 className="mb-2 text-xl font-bold">Education</h2>
      {individualEducationStates.map((education) => {
        const handleChangeSchoolName = (
          e: React.ChangeEvent<HTMLInputElement>
        ) => {
          e.preventDefault();
          const newSchoolName = e.target.value;
          setIndividualEducationStates((prev) =>
            prev.map((currEducation) =>
              currEducation.id === education.id
                ? { ...currEducation, schoolNameAnswer: newSchoolName }
                : currEducation
            )
          );
        };

        const handleChangeMajor = (e: React.ChangeEvent<HTMLInputElement>) => {
          e.preventDefault();
          const newMajor = e.target.value;
          setIndividualEducationStates((prev) =>
            prev.map((currEducation) =>
              currEducation.id === education.id
                ? { ...currEducation, majorAnswer: newMajor }
                : currEducation
            )
          );
        };

        const handleChangeGraduationYear = (
          e: React.ChangeEvent<HTMLSelectElement>
        ) => {
          e.preventDefault();
          const newGraduationYear = e.target.value;
          setIndividualEducationStates((prev) =>
            prev.map((currEducation) =>
              currEducation.id === education.id
                ? { ...currEducation, graduationYearAnswer: newGraduationYear }
                : currEducation
            )
          );
        };

        const handleConfirm = (e: React.MouseEvent<HTMLButtonElement>) => {
          e.preventDefault();
          setIndividualEducationStates((prev) =>
            prev.map((currEducation) =>
              currEducation.id === education.id
                ? { ...currEducation, canEdit: !currEducation.canEdit }
                : currEducation
            )
          );
        };

        return (
          <IndividualEducationFieldset
            key={education.id}
            canEdit={education.canEdit}
            schoolNameAnswer={education.schoolNameAnswer}
            majorAnswer={education.majorAnswer}
            graduationYearAnswer={education.graduationYearAnswer}
            handleChangeSchoolName={handleChangeSchoolName}
            handleChangeMajor={handleChangeMajor}
            handleChangeGraduationYear={handleChangeGraduationYear}
            handleConfirm={handleConfirm}
          />
        );
      })}
      <button className="mt-5 bg-gray-400 py-0.5 px-2 rounded-lg shadow-md text-lg" type="button" onClick={handleAddEducation}>
        Add Education
      </button>
    </fieldset>
  );
};

export default EducationInfoFieldsets;
