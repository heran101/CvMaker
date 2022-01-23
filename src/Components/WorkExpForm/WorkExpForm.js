import "./WorkExpForm.css";
import { useContext } from "react";
import { Grid, TextField, Box } from "@mui/material";
import { FormDataContext } from "../../Context/FormDataContext";
import HomeWorkRoundedIcon from "@mui/icons-material/HomeWorkRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ListAltRoundedIcon from "@mui/icons-material/ListAltRounded";
import CalendarTodayRoundedIcon from "@mui/icons-material/CalendarTodayRounded";
import BadgeRoundedIcon from "@mui/icons-material/BadgeRounded";
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

  return (
    <>
      <Box component="form" className="main-form">
        <Grid container spacing={1}>
          <Grid item xs={2} sm={2} md={6}>
            <Box className="formInput-columns">
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <HomeWorkRoundedIcon
                  sx={{ color: "action.active", mr: 1, my: 0.5 }}
                />
                <TextField
                  className="formInput-fields"
                  onChange={handleChange}
                  value={inputValues.employer}
                  name="employer"
                  label="Employer"
                  variant="standard"
                />
              </Box>
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
                <BadgeRoundedIcon
                  sx={{ color: "action.active", mr: 1, my: 0.5 }}
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
            </Box>
          </Grid>
          <Grid item xs={8} sm={8} md={6}>
            <Box className="formInput-columns">
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <ListAltRoundedIcon
                  sx={{ color: "action.active", mr: 1, my: 0.5 }}
                />
                <TextField
                  className="formInput-fields"
                  onChange={handleChange}
                  value={inputValues.duty}
                  variant="outlined"
                  multiline
                  maxRows={2}
                  name="duty"
                  label="Duty"
                  variant="standard"
                />
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <CalendarTodayRoundedIcon
                  sx={{ color: "action.active", mr: 1, my: 0.5 }}
                />
                <TextField
                  className="formInput-fields"
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={handleChange}
                  value={inputValues.startDate}
                  name="startDate"
                  label="Start Date"
                  variant="standard"
                />
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <CalendarTodayRoundedIcon
                  sx={{ color: "action.active", mr: 1, my: 0.5 }}
                />
                <TextField
                  className="formInput-fields"
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={handleChange}
                  value={inputValues.endDate}
                  name="endDate"
                  label="End Date"
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

export default WorkExpForm;
