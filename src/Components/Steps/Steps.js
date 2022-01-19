import React, { useState } from "react";
import "./Steps.css";
import {
  FormControlLabel,
  StepLabel,
  Grid,
  Typography,
  Button,
  Step,
  Stepper,
  Box,
  Divider,
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
        <Grid item className="stepper-columon" xs={2} sm={2} md={4}>
          <Box className="main-container">
            <Stepper
              nonLinear
              activeStep={activeStep}
              orientation="vertical"
              className="stepper-style"
            >
              {StepsData.map(({ label, description, form }, index) => (
                <Step key={label} completed={completed[index]}>
                  <FormControlLabel
                    value={label}
                    control={<StepLabel />}
                    labelPlacement="start"
                    label={
                      <React.Fragment>
                        <Typography component="div" variant="body2">
                          {label}
                        </Typography>
                        <Typography textAlign="left" variant="caption">
                          {description}
                        </Typography>
                      </React.Fragment>
                    }
                    className="stepper-style"
                    onClick={handleStep(index)}
                  />
                </Step>
              ))}
            </Stepper>
          </Box>
        </Grid>

        <Grid item className="forms" xs={8} sm={8} md={7}>
          {allStepsCompleted() ? (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 4 }}>
                All steps completed - you&apos;re finished
              </Typography>
              <Box className="final-action-buttons">
                <Button variant="outlined" onClick={handleReset}>
                  Build CV
                </Button>
                <Button variant="outlined" onClick={handleReset}>
                  Review
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
            </React.Fragment>
          )}
        </Grid>
        {!allStepsCompleted() ? (
          <Box className="action-buttons">
            <Button disabled={activeStep === 0} onClick={handleBack}>
              Back
            </Button>
            <Divider orientation="vertical" flexItem />
            <Button onClick={handleComplete}>
              {completedSteps() === totalSteps() - 1 ? "Finish" : "Next"}
            </Button>
          </Box>
        ) : (
          <Box sx={{ m: 2 }}>
            <Button></Button>
          </Box>
        )}
      </Grid>
    </>
  );
};

export default Steps;
