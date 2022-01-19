import BasicInfoForm from "../Components/BasicInfoForm/BasicInfoForm";
import EducationForm from "../Components/EducationForm/EducationForm";
import WorkExpForm from "../Components/WorkExpForm/WorkExpForm";
const StepsData = [
  {
    label: "Basic Information",
    description: " basic personal information",
    form: <BasicInfoForm />,
  },
  {
    label: "Education",
    description: " educational background",
    form: <EducationForm />,
  },
  {
    label: "Work Experience",
    description: "previous work experience",
    form: <WorkExpForm />,
  },
  {
    label: "Reference",
    description: "State your references",
    form: <BasicInfoForm />,
  },
];
export default StepsData;
