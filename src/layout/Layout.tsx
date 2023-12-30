import React, { useState } from "react";
import Header from "../layout/header/Header";
import { Box, Container, CssBaseline, Toolbar } from "@mui/material";
import SideBar from "../layout/sidebar/SideBar";
import { Outlet } from "react-router-dom";

const Landing = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header open={open} toggleDrawer={toggleDrawer} />
      <SideBar open={open} toggleDrawer={toggleDrawer} />
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light" ? theme.palette.grey[100] : theme.palette.grey[900],
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Toolbar />
        <Container maxWidth="lg" sx={{ mt: 1, mb: 1, maxWidth:"100% !important", height:"100% " }}>
         
              <Outlet />
           
        </Container>
      </Box>
    </Box>
  );
};

export default Landing;
