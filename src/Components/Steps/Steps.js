import { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "space-between",
  },
});
const Steps = () => {
  const steps = [
    "Basic Information",
    "Education",
    "Work Experience",
    "Reference",
  ];
  const [activeStep, setActiveStep] = useState(0);
  const classes = useStyles();

  return (
    <>
      <Box className="main-container">
        <Stepper
          activeStep={activeStep}
          orientation="vertical"
          classes={classes}
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
    </>
  );
};

export default Steps;
