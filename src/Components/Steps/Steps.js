import React, { useState, useContext } from "react";
import "./Steps.css";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { StepContext } from "../../Context/FormDataContext";
import Grid from "@mui/material/Grid";
import StepsData from "../../Data/StepsData";
const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "space-between",
  },
});
const Steps = () => {
  const classes = useStyles();

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
        <Grid item xs={2} sm={2} md={4}>
          <Box className="main-container">
            <Stepper
              nonLinear
              activeStep={activeStep}
              orientation="vertical"
              classes={classes}
            >
              {StepsData.map(({ label, form }, index) => (
                <Step key={label} completed={completed[index]}>
                  <StepButton color="inherit" onClick={handleStep(index)}>
                    <Typography
                      sx={{ display: { xs: "none", md: "block", sm: "none" } }}
                    >
                      {label}
                    </Typography>
                  </StepButton>
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
                <Typography className="form-header" variant="h5">
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
