import "./WorkExpForm.css";
import { useContext } from "react";
import { Grid, TextField, Box } from "@mui/material";
import { FormDataContext } from "../../Context/FormDataContext";
const WorkExpForm = () => {
  const formData = useContext(FormDataContext);
  const inputValues = formData.formData.userInfo.workExp;
  const handleChange = (event) => {
    const { name, value } = event.target;
    formData.setFormData((values) => ({
      ...values,
      userInfo: {
        ...values["userInfo"],
        ...{
          workExp: {
            ...values["userInfo"]["workExp"],
            [name]: value,
          },
        },
      },
    }));
  };
  console.log("form Data::  ", formData.formData.userInfo.workExp.employer);
  return (
    <>
      <Box component="form" className="main-form">
        <Grid container spacing={1}>
          <Grid item xs={2} sm={2} md={6}>
            <Box className="formInput-columns">
              <TextField
                className="formInput-fields"
                onChange={handleChange}
                value={inputValues.employer}
                name="employer"
                label="Employer"
                variant="standard"
              />

              <TextField
                className="formInput-fields"
                onChange={handleChange}
                value={inputValues.address}
                name="address"
                label="Address"
                variant="standard"
              />
              <TextField
                className="formInput-fields"
                onChange={handleChange}
                value={inputValues.jobTitle}
                name="jobTitle"
                label="Job Title"
                variant="standard"
              />
            </Box>
          </Grid>
          <Grid item xs={8} sm={8} md={6}>
            <Box className="formInput-columns">
              <TextField
                className="formInput-fields"
                onChange={handleChange}
                value={inputValues.duty}
                name="duty"
                label="Duty"
                variant="standard"
              />
              <TextField
                className="formInput-fields"
                onChange={handleChange}
                value={inputValues.startDate}
                name="startDate"
                label="Start Date"
                variant="standard"
              />
              <TextField
                className="formInput-fields"
                onChange={handleChange}
                value={inputValues.endDate}
                name="endDate"
                label="End Date"
                variant="standard"
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default WorkExpForm;
