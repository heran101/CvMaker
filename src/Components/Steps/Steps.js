import React, { useState, useContext } from "react";
import "./Steps.css";
import { StepContext } from "../../Context/FormDataContext";
import {
  FormControlLabel,
  StepLabel,
  Grid,
  Typography,
  Button,
  Step,
  Stepper,
  Box,
} from "@mui/material";
import StepsData from "../../Data/StepsData";
const Steps = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});

  const totalSteps = () => {
    return StepsData.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          StepsData.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={2} sm={2} md={3}>
          <Box className="main-container">
            <Stepper
              nonLinear
              activeStep={activeStep}
              orientation="vertical"
              className="stepper-style"
            >
              {StepsData.map(({ label, form }, index) => (
                <Step key={label} completed={completed[index]}>
                  <FormControlLabel
                    value={label}
                    control={<StepLabel />}
                    labelPlacement="start"
                    label={label}
                    className="stepper-style"
                    onClick={handleStep(index)}
                  />
                </Step>
              ))}
            </Stepper>
          </Box>
        </Grid>

        <Grid item className="forms" xs={8} sm={8} md={8}>
          {allStepsCompleted() ? (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 4 }}>
                All steps completed - you&apos;re finished
              </Typography>
              <Box className="action-buttons">
                <Button variant="outlined" onClick={handleReset}>
                  Build CV
                </Button>
                <Button variant="outlined" onClick={handleReset}>
                  Reset
                </Button>
              </Box>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Box>
                {" "}
                <Typography className="form-header" variant="h6">
                  {StepsData[activeStep].label}
                </Typography>
                {StepsData[activeStep].form}
              </Box>
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Box className="action-buttons">
                  <Button
                    variant="outlined"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                  >
                    Back
                  </Button>
                  {activeStep !== StepsData.length &&
                    (completed[activeStep] ? (
                      <Box>
                        <Typography
                          variant="caption"
                          sx={{ display: "inline-block" }}
                        >
                          Step {activeStep + 1} already completed
                        </Typography>
                      </Box>
                    ) : (
                      <Box>
                        <Button variant="outlined" onClick={handleComplete}>
                          {completedSteps() === totalSteps() - 1
                            ? "Finish"
                            : "Submit"}
                        </Button>
                      </Box>
                    ))}
                  <Box>
                    <Button
                      variant="outlined"
                      onClick={handleNext}
                      sx={{ mr: 1 }}
                    >
                      Next
                    </Button>
                  </Box>
                </Box>
              </Box>
            </React.Fragment>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default Steps;
