import BasicInfoForm from "../Components/BasicInfoForm/BasicInfoForm";
import EducationForm from "../Components/EducationForm/EducationForm";
import WorkExpForm from "../Components/WorkExpForm/WorkExpForm";
const StepsData = [
  {
    label: "Basic Information",
    form: <BasicInfoForm />,
  },
  {
    label: "Education",
    form: <EducationForm />,
  },
  {
    label: "Work Experience",
    form: <WorkExpForm />,
  },
  {
    label: "Reference",
    form: <BasicInfoForm />,
  },
];
export default StepsData;
