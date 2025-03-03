interface IndividualWorkExperienceProps {
  canEdit: boolean;
  companyNameAnswer: string;
  positionTitleAnswer: string;
  startDateAnswer: string;
  endDateAnswer: string;
  roleDescriptionAnswer: string;

  handleChangeCompanyName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangePositionTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeStartDate: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeEndDate: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeRoleDescription: (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => void;

  handleConfirm: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const IndividualWorkExperienceFieldset = ({
  canEdit,
  companyNameAnswer,
  positionTitleAnswer,
  startDateAnswer,
  endDateAnswer,
  roleDescriptionAnswer,
  handleChangeCompanyName,
  handleChangePositionTitle,
  handleChangeStartDate,
  handleChangeEndDate,
  handleChangeRoleDescription,
  handleConfirm,
}: IndividualWorkExperienceProps) => {
  return (
    <div className="flex flex-col items-start justify-start w-5/6 px-4 pt-3 pb-3 bg-gray-300 rounded-md shadow-sm mb-4">
      <label htmlFor="companyNameQuestion"
      className="mb-1 text-lg font-medium">Company Name:</label>
      <input
        type="text"
        id="companyNameQuestion"
        name="companyNameQuestion"
        value={companyNameAnswer}
        onChange={canEdit ? handleChangeCompanyName : () => {}}
        disabled={!canEdit}
        className="px-2 py-1 mb-3 rounded-md text-xs shadow"
      />
      <label htmlFor="positionTitleQuestion"
      className="mb-1 text-lg font-medium">Major:</label>
      <input
        type="text"
        id="positionTitleQuestion"
        name="positionTitleQuestion"
        value={positionTitleAnswer}
        onChange={canEdit ? handleChangePositionTitle : () => {}}
        disabled={!canEdit}
        className="px-2 py-1 mb-3 rounded-md text-xs shadow"
      />
      <label htmlFor="startDateQuestion"
      className="mb-1 text-lg font-medium">Start Date:</label>
      <input
        type="date"
        id="startDateQuestion"
        name="startDateQuestion"
        value={startDateAnswer}
        onChange={canEdit ? handleChangeStartDate : () => {}}
        disabled={!canEdit}
        className="px-2 py-1 mb-3 rounded-md text-xs shadow"
      />
      <label htmlFor="endDateQuestion"
      className="mb-1 text-lg font-medium">End Date:</label>
      <input
        type="date"
        id="endDateQuestion"
        name="endDateQuestion"
        value={endDateAnswer}
        onChange={canEdit ? handleChangeEndDate : () => {}}
        disabled={!canEdit}
        className="px-2 py-1 mb-3 rounded-md text-xs shadow"
      />
      <label htmlFor="roleDescriptionQuestion"
      className="mb-1 text-lg font-medium">Role Description:</label>
      <textarea
        id="roleDescriptionQuestion"
        name="roleDescriptionQuestion"
        value={roleDescriptionAnswer}
        onChange={canEdit ? handleChangeRoleDescription : () => {}}
        disabled={!canEdit}
        className="px-2 py-1 mb-3 rounded-md text-xs shadow"
      />

      <button type="button" onClick={handleConfirm}
        className="bg-green-700 py-0.5 px-2 rounded-lg shadow-sm shadow-gray-700 text-s mt-2">
        {canEdit ? "Confirm" : "Edit"}
      </button>
    </div>
  );
};

export default IndividualWorkExperienceFieldset;
