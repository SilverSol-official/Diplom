import * as React from "react";
import Button from "@mui/material/Button";
//import Button from '@mui/material-next/Button';
import Box from "@mui/material/Box";
import PersonIcon from "@mui/icons-material/Person";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import Brightness3Icon from "@mui/icons-material/Brightness3";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ListIcon from "@mui/icons-material/List";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { useDispatch } from "react-redux";
import { logOut } from "../../rdx/features/ProjectReducers";
import { useNavigate } from "react-router-dom";
import AlertDialog from "./Dialogue";
import AddProject from "./AddProject";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const ButtonStyles = {
  width: "55px",
  height: "55px",
  minWidth: "30px",
  minHeight: "30px",
  borderRadius: "50%",
  margin: "20px auto ",
};

const ExitButtonStyles = {
  width: "55px",
  height: "55px",
  minWidth: "30px",
  minHeight: "30px",
  borderRadius: "50%",
  margin: "360% auto 0px",
};

const ContainerStyle = {
  display: "flex",
  flexDirection: "column",
};

const SideMenu = () => {
  const [theme, setTheme] = useState("light");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const ChangeTheme = () => {
    console.log(theme);
    if (theme == "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
    console.log(theme);
  };

  return (
    <Grid item xs={1} className="SideMenu">
      <Item sx={{ height: "100%" }}>
        <Box sx={ContainerStyle}>
          {/*<h3>SILVER MANAGER</h3>*/}
          <AlertDialog />

          <Button
            variant="outlined"
            sx={ButtonStyles}
            onClick={() => ChangeTheme()}
          >
            {theme == "light" ? <Brightness3Icon /> : <WbSunnyIcon />}{" "}
          </Button>
          {/* <Button variant="outlined" sx={ButtonStyles}>
            <CalendarTodayIcon />{" "}
          </Button> */}
          {/* <Button variant="outlined" sx={ButtonStyles}>
            <ListIcon />{" "}
          </Button> */}
          {/* <Button variant="outlined" sx={ButtonStyles}>
            <SettingsIcon />{" "}
          </Button> */}
          {/* <Button variant="outlined" sx={ButtonStyles}>
            <CloudDownloadIcon />{" "}
          </Button> */}
          <AddProject />
          <Button
            variant="outlined"
            sx={ExitButtonStyles}
            onClick={() => {
              dispatch(logOut());
              navigate("/", { replace: true });
            }}
          >
            <LogoutIcon />{" "}
          </Button>
        </Box>
      </Item>
    </Grid>
  );
};

export default SideMenu;
