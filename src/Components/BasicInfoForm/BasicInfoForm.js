import "./BasicInfoForm.css";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
const BasicInfoForm = () => {
  return (
    <>
      <Box
        component="form"
        className="main-form"
        sx={{
          "& > :not(style)": { m: 1, width: "20ch" },
        }}
      >
        <TextField id="standard-basic" label="First Name" variant="standard" />
        <TextField id="standard-basic" label="Last Name" variant="standard" />
        <TextField id="standard-basic" label="Address" variant="standard" />
        <TextField id="standard-basic" label="City/Town" variant="standard" />
        <TextField id="standard-basic" label="Email" variant="standard" />
        <TextField id="standard-basic" label="Phone" variant="standard" />
      </Box>
    </>
  );
};

export default BasicInfoForm;
