import { useState } from "react";

const GeneralInfoFieldset = () => {
  const [canEdit, setCanEdit] = useState<boolean>(true);
  const [nameAnswer, setNameAnswer] = useState<string>("John Doe");
  const [emailAnswer, setEmailAnswer] = useState<string>("example@gmail.com");
  const [phoneNumberAnswer, setPhoneNumberAnswer] =
    useState<string>("0123456789");

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (canEdit) {
      setNameAnswer(e.target.value);
    }
  };

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (canEdit) {
      setEmailAnswer(e.target.value);
    }
  };

  const handleChangePhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (canEdit) {
      setPhoneNumberAnswer(e.target.value);
    }
  };

  const handleConfirm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setCanEdit(!canEdit);
  };

  return (
    <fieldset className="flex flex-col items-start justify-start p-4 bg-gray-200 rounded-md shadow-lg">
      <h2 className="mb-2 text-xl font-bold">General Information</h2>
      <div className="flex flex-col items-start justify-start w-5/6 px-4 pt-3 pb-3 bg-gray-300 rounded-md shadow-sm">
        <label htmlFor="nameQuestion" className="mb-1 text-lg font-medium">Name:</label>
        <input
          className="px-2 py-1 mb-3 rounded-md text-xs shadow"
          type="text"
          id="nameQuestion"
          name="nameQuestion"
          value={nameAnswer}
          onChange={handleChangeName}
          disabled={!canEdit}
        />
        <label htmlFor="emailQuestion" className="mb-1 text-lg font-medium">Email:</label>
        <input
          className="px-2 py-1 mb-3 rounded-md text-xs shadow"
          type="email"
          id="emailQuestion"
          name="emailQuestion"
          value={emailAnswer}
          onChange={handleChangeEmail}
          disabled={!canEdit}
        />
        <label htmlFor="phoneNumberQuestion" className="mb-1 text-lg font-medium">Phone Number:</label>
        <input
          className="px-2 py-1 mb-3 rounded-md text-xs shadow"
          type="tel"
          id="phoneNumberQuestion"
          name="phoneNumberQuestion"
          value={phoneNumberAnswer}
          onChange={handleChangePhoneNumber}
          disabled={!canEdit}
        />
        <button type="button" onClick={handleConfirm}
          className="bg-green-700 py-0.5 px-2 rounded-lg shadow-sm shadow-gray-700 text-s mt-2">
          {canEdit ? "Confirm" : "Edit"}
        </button>
      </div>
    </fieldset>
  );
};

export default GeneralInfoFieldset;
