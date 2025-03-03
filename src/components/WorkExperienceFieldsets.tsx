import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import IndividualWorkExperienceFieldset from "./IndividualWorkExperienceFieldset";

interface IndividualWorkExperienceState {
  id: string;
  canEdit: boolean;
  companyNameAnswer: string;
  positionTitleAnswer: string;
  startDateAnswer: string;
  endDateAnswer: string;
  roleDescriptionAnswer: string;
}

const WorkExperienceFieldsets = () => {
  const [individualWorkExperienceStates, setIndividualWorkExperienceStates] =
    useState<IndividualWorkExperienceState[]>([]);

  const handleAddWorkExperience = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const newId: string = uuidv4();
    const newWorkExperienceState: IndividualWorkExperienceState = {
      id: newId,
      canEdit: true,
      companyNameAnswer: "",
      positionTitleAnswer: "",
      startDateAnswer: "",
      endDateAnswer: "",
      roleDescriptionAnswer: "",
    };
    setIndividualWorkExperienceStates((prev) => [
      ...prev,
      newWorkExperienceState,
    ]);
  };

  return (
    <fieldset className="flex flex-col items-start justify-start p-4 bg-gray-200 rounded-md shadow-lg">
      <h2 className="mb-2 text-xl font-bold">Work Experience</h2>
      {individualWorkExperienceStates.map((workExperience) => {
        const handleChangeCompanyName = (
          e: React.ChangeEvent<HTMLInputElement>
        ) => {
          e.preventDefault();
          const newCompanyName = e.target.value;
          setIndividualWorkExperienceStates((prev) =>
            prev.map(
              (
                currWorkExperience: IndividualWorkExperienceState
              ): IndividualWorkExperienceState =>
                currWorkExperience.id === workExperience.id
                  ? { ...currWorkExperience, companyNameAnswer: newCompanyName }
                  : currWorkExperience
            )
          );
        };

        const handleChangePositionTitle = (
          e: React.ChangeEvent<HTMLInputElement>
        ) => {
          e.preventDefault();
          const newPositionTitle = e.target.value;
          setIndividualWorkExperienceStates((prev) =>
            prev.map(
              (
                currWorkExperience: IndividualWorkExperienceState
              ): IndividualWorkExperienceState =>
                currWorkExperience.id === workExperience.id
                  ? {
                      ...currWorkExperience,
                      positionTitleAnswer: newPositionTitle,
                    }
                  : currWorkExperience
            )
          );
        };

        const handleChangeStartDate = (
          e: React.ChangeEvent<HTMLInputElement>
        ) => {
          e.preventDefault();
          const newStartDate = e.target.value;
          setIndividualWorkExperienceStates((prev) =>
            prev.map(
              (
                currWorkExperience: IndividualWorkExperienceState
              ): IndividualWorkExperienceState =>
                currWorkExperience.id === workExperience.id
                  ? {
                      ...currWorkExperience,
                      startDateAnswer: newStartDate,
                    }
                  : currWorkExperience
            )
          );
        };

        const handleChangeEndDate = (
          e: React.ChangeEvent<HTMLInputElement>
        ) => {
          e.preventDefault();
          const newEndDate = e.target.value;
          setIndividualWorkExperienceStates((prev) =>
            prev.map(
              (
                currWorkExperience: IndividualWorkExperienceState
              ): IndividualWorkExperienceState =>
                currWorkExperience.id === workExperience.id
                  ? {
                      ...currWorkExperience,
                      endDateAnswer: newEndDate,
                    }
                  : currWorkExperience
            )
          );
        };

        const handleChangeRoleDescription = (
          e: React.ChangeEvent<HTMLTextAreaElement>
        ) => {
          e.preventDefault();
          const newRoleDescription = e.target.value;
          setIndividualWorkExperienceStates((prev) =>
            prev.map(
              (
                currWorkExperience: IndividualWorkExperienceState
              ): IndividualWorkExperienceState =>
                currWorkExperience.id === workExperience.id
                  ? {
                      ...currWorkExperience,
                      roleDescriptionAnswer: newRoleDescription,
                    }
                  : currWorkExperience
            )
          );
        };

        const handleConfirm = (e: React.MouseEvent<HTMLButtonElement>) => {
          e.preventDefault();
          setIndividualWorkExperienceStates((prev) =>
            prev.map((currWorkExperience) =>
              currWorkExperience.id === workExperience.id
                ? {
                    ...currWorkExperience,
                    canEdit: !currWorkExperience.canEdit,
                  }
                : currWorkExperience
            )
          );
        };

        return (
          <IndividualWorkExperienceFieldset
            key={workExperience.id}
            canEdit={workExperience.canEdit}
            companyNameAnswer={workExperience.companyNameAnswer}
            positionTitleAnswer={workExperience.positionTitleAnswer}
            startDateAnswer={workExperience.startDateAnswer}
            endDateAnswer={workExperience.endDateAnswer}
            roleDescriptionAnswer={workExperience.roleDescriptionAnswer}
            handleChangeCompanyName={handleChangeCompanyName}
            handleChangePositionTitle={handleChangePositionTitle}
            handleChangeStartDate={handleChangeStartDate}
            handleChangeEndDate={handleChangeEndDate}
            handleChangeRoleDescription={handleChangeRoleDescription}
            handleConfirm={handleConfirm}
          />
        );
      })}
      <button type="button" onClick={handleAddWorkExperience}
        className="mt-5 bg-gray-400 py-0.5 px-2 rounded-lg shadow-md text-lg">
        Add Work Experience
      </button>
    </fieldset>
  );
};

export default WorkExperienceFieldsets;
