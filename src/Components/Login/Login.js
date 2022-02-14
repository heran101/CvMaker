import React, { useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import { Typography } from "@mui/material";
const clientId =
  "876654044713-ceobnhp548qacha5na59bh2itn1kpqdv.apps.googleusercontent.com";

function Login() {
  const [showloginButton, setShowloginButton] = useState(true);
  const [showlogoutButton, setShowlogoutButton] = useState(false);
  const onLoginSuccess = (res) => {
    console.log("Login Success:", res.profileObj);
    setShowloginButton(false);
    setShowlogoutButton(true);
  };

  const onLoginFailure = (res) => {
    console.log("Login Failed:", res);
  };

  const onSignoutSuccess = () => {
    alert("You have been logged out successfully");
    console.clear();
    setShowloginButton(true);
    setShowlogoutButton(false);
  };

  return (
    <div>
      {showloginButton ? (
        <GoogleLogin
          render={(renderProps) => (
            <IconButton
              size="small"
              edge="end"
              onClick={renderProps.onClick}
              color="inherit"
            >
              <Typography sx={{ m: 2 }} variant="h6" color="primary">
                Sign in
              </Typography>
              <Avatar alt="Heran Tse" src="" />
            </IconButton>
          )}
          clientId={clientId}
          buttonText="Sign In"
          onSuccess={onLoginSuccess}
          onFailure={onLoginFailure}
          cookiePolicy={"single_host_origin"}
          isSignedIn={true}
        />
      ) : null}

      {showlogoutButton ? (
        <GoogleLogout
          render={(renderProps) => (
            <IconButton
              size="small"
              edge="end"
              onClick={renderProps.onClick}
              color="inherit"
            >
              <Typography color="primary" variant="h6" sx={{ m: 2 }}>
                Sign out
              </Typography>
              <Avatar alt="Heran Tse" src="" />
            </IconButton>
          )}
          clientId={clientId}
          buttonText="Sign Out"
          onLogoutSuccess={onSignoutSuccess}
        ></GoogleLogout>
      ) : null}
    </div>
  );
}
export default Login;
