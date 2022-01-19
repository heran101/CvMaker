import "./EducationForm.css";
import { useContext } from "react";
import { Grid, TextField, Box } from "@mui/material";
import { FormDataContext } from "../../Context/FormDataContext";
const EducationForm = () => {
  const formData = useContext(FormDataContext);
  const inputValues = formData.formData.userInfo.education;
  const handleChange = (event) => {
    const { name, value } = event.target;
    formData.setFormData((values) => ({
      ...values,
      userInfo: {
        ...values["userInfo"],
        ...{
          education: {
            ...values["userInfo"]["education"],
            [name]: value,
          },
        },
      },
    }));
  };
  console.log(
    "form Data::  ",
    formData.formData.userInfo.education.fieldOfStudy
  );
  return (
    <>
      <Box component="form" className="main-form">
        <Grid container spacing={1}>
          <Grid item xs={2} sm={2} md={6}>
            <Box className="formInput-columns">
              <TextField
                className="formInput-fields"
                onChange={handleChange}
                value={inputValues.fieldOfStudy}
                name="fieldOfStudy"
                label="Field Of Study"
                variant="standard"
              />

              <TextField
                className="formInput-fields"
                onChange={handleChange}
                value={inputValues.qualification}
                name="qualification"
                label="Qualification"
                variant="standard"
              />
              <TextField
                className="formInput-fields"
                onChange={handleChange}
                value={inputValues.institution}
                name="institution"
                label="Institution"
                variant="standard"
              />
            </Box>
          </Grid>
          <Grid item xs={8} sm={8} md={6}>
            <Box className="formInput-columns">
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
                value={inputValues.graduationDate}
                name="graduationDate"
                label="Graduation Date"
                variant="standard"
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default EducationForm;
