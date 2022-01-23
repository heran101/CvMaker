import "./BasicInfoForm.css";
import { useContext } from "react";
import { Grid, TextField, Box } from "@mui/material";
import { FormDataContext } from "../../Context/FormDataContext";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
const BasicInfoForm = () => {
  const formData = useContext(FormDataContext);
  const inputValues = formData.formData.userInfo.basicInfo;
  const handleChange = (event) => {
    const { name, value } = event.target;
    formData.setFormData((values) => ({
      ...values,
      userInfo: {
        ...values["userInfo"],
        ...{
          basicInfo: {
            ...values["userInfo"]["basicInfo"],
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
                <AccountCircle
                  sx={{ color: "action.active", mr: 1, my: 0.5 }}
                />
                <TextField
                  className="formInput-fields"
                  onChange={handleChange}
                  value={inputValues.firstName}
                  name="firstName"
                  label="First Name"
                  variant="standard"
                />
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <AccountCircle
                  sx={{ color: "action.active", mr: 1, my: 0.5 }}
                />
                <TextField
                  className="formInput-fields"
                  onChange={handleChange}
                  value={inputValues.lastName}
                  name="lastName"
                  label="Last Name"
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
            </Box>
          </Grid>
          <Grid item xs={8} sm={8} md={6}>
            <Box className="formInput-columns">
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <MailOutlineRoundedIcon
                  sx={{ color: "action.active", mr: 1, my: 0.5 }}
                />
                <TextField
                  className="formInput-fields"
                  onChange={handleChange}
                  value={inputValues.email}
                  name="email"
                  label="Email"
                  variant="standard"
                />
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <PhoneRoundedIcon
                  sx={{ color: "action.active", mr: 1, my: 0.5 }}
                />
                <TextField
                  className="formInput-fields"
                  onChange={handleChange}
                  value={inputValues.phone}
                  name="phone"
                  label="Phone"
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

export default BasicInfoForm;
