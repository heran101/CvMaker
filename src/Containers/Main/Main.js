import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Steps } from "../../Components";
import "./Main.css";
const Main = () => {
  return (
    <>
      <Paper className="main-container" elevation={4} xs={12} sm={12}>
        <Box className="main-container-header">
          <Typography variant="h5">Build your CV</Typography>
        </Box>
        <Box className="main-container-header-sub">
          <Typography variant="caption">
            Follow the 4 steps to complete building your CV
          </Typography>
        </Box>

        <Steps />
      </Paper>
    </>
  );
};

export default Main;
