import react, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import SideMenu from "../SideMenu/SideMenu";
import Folders from "../Folders/Folders";
import MainWindow from "../MainWindow/MainWindow";
import RegForm from "../Registration/Registration";
import { useSelector } from "react-redux";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const MainPage = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0} height="100vh">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<RegForm />} />
            <Route path="/authed/" element={<AuthLayout />}>
              <Route path=":id" element={<MainWindow />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Grid>
    </Box>
  );
};

const AuthLayout = () => {
  return (
    <>
      <SideMenu />
      <Folders />
      <Outlet />
    </>
  );
};

export default MainPage;
