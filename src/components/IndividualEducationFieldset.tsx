interface IndividualEducationProps {
  canEdit: boolean;
  schoolNameAnswer: string;
  majorAnswer: string;
  graduationYearAnswer: string;
  handleChangeSchoolName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeMajor: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeGraduationYear: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleConfirm: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const MIN_GRADUATION_YEAR = 2000;
const MAX_GRADUATION_YEAR = 2025;

const yearOptions: number[] = [];
for (let i = MIN_GRADUATION_YEAR; i <= MAX_GRADUATION_YEAR; i++) {
  yearOptions.push(i);
}

const IndividualEducationFieldset = ({
  canEdit,
  schoolNameAnswer,
  majorAnswer,
  graduationYearAnswer,
  handleChangeSchoolName,
  handleChangeMajor,
  handleChangeGraduationYear,
  handleConfirm,
}: IndividualEducationProps) => {
  return (
    <div className="flex flex-col items-start justify-start w-5/6 px-4 pt-3 pb-3 bg-gray-300 rounded-md shadow-sm mb-4">
      <label htmlFor="schoolNameQuestion" className="mb-1 text-lg font-medium">School Name:</label>
      <input
        type="text"
        id="schoolNameQuestion"
        name="schoolNameQuestion"
        value={schoolNameAnswer}
        onChange={canEdit ? handleChangeSchoolName : () => {}}
        disabled={!canEdit}
        className="px-2 py-1 mb-3 rounded-md text-xs shadow"
      />
      <label htmlFor="majorQuestion" className="mb-1 text-lg font-medium">Major:</label>
      <input
        type="text"
        id="majorQuestion"
        name="majorQuestion"
        value={majorAnswer}
        onChange={canEdit ? handleChangeMajor : () => {}}
        disabled={!canEdit}
        className="px-2 py-1 mb-3 rounded-md text-xs shadow"
      />
      <label htmlFor="graduationYearQuestion" className="mb-1 text-lg font-medium">Graduation Year:</label>
      <select
        id="graduationYearQuestion"
        name="graduationYearQuestion"
        value={graduationYearAnswer}
        onChange={canEdit ? handleChangeGraduationYear : () => {}}
        disabled={!canEdit}
        className="px-2 py-1 mb-3 rounded-md text-xs shadow"
      >
        {yearOptions.map((year: number) => {
          return <option value={year}>{year}</option>;
        })}
      </select>

      <button type="button" onClick={handleConfirm} 
        className="bg-green-700 py-0.5 px-2 rounded-lg shadow-sm shadow-gray-700 text-s mt-2">
        {canEdit ? "Confirm" : "Edit"}
      </button>
    </div>
  );
};

export default IndividualEducationFieldset;
