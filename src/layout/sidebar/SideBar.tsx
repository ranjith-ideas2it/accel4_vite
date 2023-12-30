import CloseIcon from "@mui/icons-material/Close";
import { Drawer as MuiDrawer, IconButton, List, Toolbar, Box } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import { INAVBAR } from "../../type/sideNavbar/SideBar";
import ItemList from "./ListItems";
import { drawerWidth } from "../../constants/SideBarItems";

const SideBar = (props: INAVBAR) => {
  const { open, toggleDrawer } = props;

  const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== "open" })(
    ({ theme, open }) => ({
      "& .MuiDrawer-paper": {
        position: "relative",
        whiteSpace: "nowrap",
        width: drawerWidth,
        height: "100%",
        transition: theme.transitions.create("width", {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
        boxSizing: "border-box",
        ...(!open && {
          overflowX: "hidden",
          transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          width: theme.spacing(7),
          [theme.breakpoints.up("sm")]: {
            width: theme.spacing(9),
          },
        }),
      },
    }),
  );

  return (
    <Drawer variant="permanent" open={open}>
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          px: [1],
        }}
      >
        {open && (
          <IconButton onClick={toggleDrawer} size="small">
            <CloseIcon fontSize="small" />
          </IconButton>
        )}
      </Toolbar>
      <Box overflow="auto" height={"100vh"}>
        <List component="nav">
          <ItemList />
        </List>
      </Box>
    </Drawer>
  );
};

export default SideBar;
