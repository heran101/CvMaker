import "./BasicInfoForm.css";
import { useState } from "react";
import { Grid, TextField, Box } from "@mui/material";
const BasicInfoForm = () => {
  return (
    <>
      <Box component="form" className="main-form">
        <Grid container className="main-form" spacing={1}>
          <Grid item xs={2} sm={2} md={6}>
            <Box className="formInput-columns">
              <TextField
                id="standard-basic"
                label="First Name"
                variant="standard"
              />
              <TextField
                id="standard-basic"
                label="Last Name"
                variant="standard"
              />
              <TextField
                id="standard-basic"
                label="Address"
                variant="standard"
              />
            </Box>
          </Grid>
          <Grid item xs={8} sm={8} md={6}>
            <Box className="formInput-columns">
              <TextField
                id="standard-basic"
                label="City/Town"
                variant="standard"
              />
              <TextField id="standard-basic" label="Email" variant="standard" />
              <TextField id="standard-basic" label="Phone" variant="standard" />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default BasicInfoForm;
