import "./EducationForm.css";
import { useContext } from "react";
import { Grid, TextField, Box } from "@mui/material";
import { FormDataContext } from "../../Context/FormDataContext";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import CardMembershipRoundedIcon from "@mui/icons-material/CardMembershipRounded";
import BadgeRoundedIcon from "@mui/icons-material/BadgeRounded";
import CalendarTodayRoundedIcon from "@mui/icons-material/CalendarTodayRounded";

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
  return (
    <>
      <Box component="form" className="main-form">
        <Grid container spacing={1}>
          <Grid item xs={2} sm={2} md={6}>
            <Box className="formInput-columns">
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <BadgeRoundedIcon
                  sx={{ color: "action.active", mr: 1, my: 0.5 }}
                />
                <TextField
                  className="formInput-fields"
                  onChange={handleChange}
                  value={inputValues.fieldOfStudy}
                  name="fieldOfStudy"
                  label="Field Of Study"
                  variant="standard"
                />
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <CardMembershipRoundedIcon
                  sx={{ color: "action.active", mr: 1, my: 0.5 }}
                />
                <TextField
                  className="formInput-fields"
                  onChange={handleChange}
                  value={inputValues.qualification}
                  name="qualification"
                  label="Qualification"
                  variant="standard"
                />
              </Box>

              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <SchoolRoundedIcon
                  sx={{ color: "action.active", mr: 1, my: 0.5 }}
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
            </Box>
          </Grid>
          <Grid item xs={8} sm={8} md={6}>
            <Box className="formInput-columns">
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <HomeRoundedIcon
                  sx={{ color: "action.active", mr: 1, my: 0.5 }}
                />
                <TextField
                  className="formInput-fields"
                  onChange={handleChange}
                  value={inputValues.address}
                  name="address"
                  label="Address"
                  variant="standard"
                />
              </Box>

              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <CalendarTodayRoundedIcon
                  sx={{ color: "action.active", mr: 1, my: 0.5 }}
                />
                <TextField
                  components={{
                    OpenPickerIcon: "",
                  }}
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  className="formInput-fields"
                  onChange={handleChange}
                  value={inputValues.graduationDate}
                  name="graduationDate"
                  label="Graduation Date"
                  variant="standard"
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default EducationForm;
