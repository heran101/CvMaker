import { useState } from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Steps, BasicInfoForm } from "../../Components";
import "./Main.css";
const Main = () => {
  return (
    <>
      <div className="main-container">
        <Paper elevation={4}>
          <Typography className="main-container-header" variant="h5">
            Create your CV
          </Typography>
          <Grid container spacing={2}>
            <Grid className="progress-stepper" item xs={12} md={4}>
              <Steps />
            </Grid>
            <Grid className="forms" item xs={12} md={8}>
              <BasicInfoForm />
            </Grid>
          </Grid>
        </Paper>
      </div>
    </>
  );
};

export default Main;
