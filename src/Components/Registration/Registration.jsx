// import * as React from "react";
// import PropTypes from "prop-types";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
// import Box from "@mui/material/Box";
// import { Typography } from "@mui/material";

// function CustomTabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
//     </div>
//   );
// }

// CustomTabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     "aria-controls": `simple-tabpanel-${index}`,
//   };
// }

// const RegForm = () => {
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <Box sx={{ width: "20%", margin: "auto", height: "50%" }}>
//       <Typography variant="h3" sx={{ marginBottom: "10px" }}>
//         Silver manager
//       </Typography>
//       <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
//         <Tabs
//           value={value}
//           onChange={handleChange}
//           aria-label="basic tabs example"
//         >
//           <Tab label="Login" {...a11yProps(0)} />
//           <Tab label="Sign in" {...a11yProps(1)} />
//         </Tabs>
//       </Box>
//       <CustomTabPanel value={value} index={0}>
//         Login
//       </CustomTabPanel>
//       <CustomTabPanel value={value} index={1}>
//         Sign in
//       </CustomTabPanel>
//     </Box>
//   );
// };
// export default RegForm;

import react, { useEffect, useState } from "react";
import { styled } from "@mui/system";
import { Tabs } from "@mui/base/Tabs";
import { TabsList as BaseTabsList } from "@mui/base/TabsList";
import { TabPanel as BaseTabPanel } from "@mui/base/TabPanel";
import { buttonClasses } from "@mui/base/Button";
import { Tab as BaseTab, tabClasses } from "@mui/base/Tab";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import TextField from "@mui/material/TextField";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import { Input } from "@mui/base/Input";
import { useDispatch } from "react-redux";
import { auth, register } from "../../rdx/features/ProjectReducers";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function RegForm() {
  const navigate = useNavigate();

  const authed = useSelector((state) => state.project.authed);
  console.log(authed);
  useEffect(() => {
    if (authed == true) {
      navigate("/authed/", { replace: true });
    } else navigate("/", { replace: true });
  }, [authed, navigate]);

  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [remember, setRemember] = useState(false);
  const dispatch = useDispatch();
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleChange = (event) => {
    setRemember(event.target.checked);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <Box sx={{ width: "20%", margin: "auto", height: "50%" }}>
      <Typography variant="h3" sx={{ marginBottom: "10px" }}>
        Silver manager
      </Typography>
      <Tabs defaultValue={0}>
        <TabsList>
          <Tab value={0}>Log in</Tab>
          <Tab value={1}>Sign in</Tab>
        </TabsList>

        <TabPanel value={0}>
          <TextField
            id="outlined-basic"
            label="User name"
            variant="outlined"
            sx={{ width: "80%" }}
            onChange={(event) => setName(event.target.value)}
            value={name}
          />
          <FormControl sx={{ m: 1, width: "80%" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              onChange={(event) => setPassword(event.target.value)}
              value={password}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <Box>
            <FormControlLabel
              control={<Checkbox onChange={handleChange} checked={remember} />}
              label="Remember me"
            />
          </Box>

          <Button
            variant="contained"
            onClick={() => {
              dispatch(auth({ userName: name, userPassword: password }));
            }}
          >
            Log in
          </Button>
        </TabPanel>

        <TabPanel value={1}>
          <TextField
            id="outlined-basic"
            label="User name"
            variant="outlined"
            sx={{ width: "80%" }}
            onChange={(event) => setName(event.target.value)}
            value={name}
          />
          <FormControl sx={{ m: 1, width: "80%" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              onChange={(event) => setPassword(event.target.value)}
              value={password}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <Button
            variant="contained"
            onClick={() => {
              dispatch(register({ userName: name, userPassword: password }));
            }}
          >
            Sign in
          </Button>
        </TabPanel>
      </Tabs>
    </Box>
  );
}

const blue = {
  50: "#F0F7FF",
  100: "#C2E0FF",
  200: "#80BFFF",
  300: "#66B2FF",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  700: "#0059B2",
  800: "#004C99",
  900: "#003A75",
};

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};

const Tab = styled(BaseTab)`
  font-family: "IBM Plex Sans", sans-serif;
  color: #fff;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 600;
  background-color: transparent;
  width: 100%;
  padding: 10px 12px;
  margin: 6px;
  border: none;
  border-radius: 7px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: ${blue[400]};
  }

  &:focus {
    color: #fff;
    outline: 3px solid ${blue[200]};
  }

  &.${tabClasses.selected} {
    background-color: #fff;
    color: ${blue[600]};
  }

  &.${buttonClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(BaseTabPanel)(
  ({ theme }) => `
  width: 100%;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  padding: 20px 12px;
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  border-radius: 12px;
  opacity: 0.6;
  `
);

const TabsList = styled(BaseTabsList)(
  ({ theme }) => `
  min-width: 400px;
  background-color: ${blue[500]};
  border-radius: 12px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  box-shadow: 0px 4px 30px ${
    theme.palette.mode === "dark" ? grey[900] : grey[200]
  };
  `
);
