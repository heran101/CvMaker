import "./WorkExpForm.css";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
const WorkExpForm = () => {
  return (
    <>
      <Box
        component="form"
        className="main-form"
        sx={{
          "& > :not(style)": { m: 1, width: "20ch" },
        }}
      >
        <TextField id="standard-basic" label="Job title" variant="standard" />
        <TextField id="standard-basic" label="Employer" variant="standard" />
        <TextField id="standard-basic" label="City/Town" variant="standard" />
        <TextField id="standard-basic" label="End date" variant="standard" />
        <TextField id="standard-basic" label="Start date" variant="standard" />
        <TextField id="standard-basic" label="Phone" variant="standard" />
        <TextField id="standard-basic" label="Email" variant="standard" />
      </Box>
    </>
  );
};

export default WorkExpForm;
