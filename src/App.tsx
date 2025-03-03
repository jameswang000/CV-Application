import GeneralInfoForm from "./components/GeneralInfoFieldset";
import EducationInfoFieldsets from "./components/EducationInfoFieldsets";
import WorkExperienceFieldsets from "./components/WorkExperienceFieldsets";

function App() {
  return (
    <>
    <form
      action="#"
      className="flex flex-col justify-start gap-5 px-3 bg-gray-100 font-roboto pt-7 p"
    >
      <h1 className="text-3xl font-bold mb-5 self-center">Job Application</h1>
      <GeneralInfoForm />
      <EducationInfoFieldsets />
      <WorkExperienceFieldsets />
      <button className="self-center mt-5 mb-20 w-fit bg-gray-500 py-2 px-5 rounded-lg shadow-md text-xl font-bold" type="submit">Submit Application</button>
    </form>
    </>
  );
}

export default App;
