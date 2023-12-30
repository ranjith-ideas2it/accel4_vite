import { AppBar as MuiAppBar, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import {
  AccountCircle as AccountIcon,
  Menu as MenuIcon,
  ArrowDropDownCircleOutlined as ArrowDownIcon,
} from "@mui/icons-material";
import { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { INAVBAR } from "../../type/sideNavbar/SideBar";
import { drawerWidth } from "../../constants/SideBarItems";

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  height: "60px",
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Header = (props: INAVBAR) => {
  const { open, toggleDrawer } = props;

  return (
    <AppBar position="absolute" open={open} elevation={0}>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer}
          sx={{
            marginRight: "36px",
            ...(open && { display: "none" }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          component="h1"
          fontSize="18px"
          fontFamily="heebo"
          fontWeight={700}
          sx={{ flexGrow: 1 }}
        >
          Accel4
        </Typography>
        <Typography variant="h6" component="h1" fontSize="14px" fontFamily="heebo" fontWeight={400}>
          Richard Charles
        </Typography>
        <IconButton size="large" color="inherit" aria-label="profile">
          <AccountIcon fontSize="large" />
        </IconButton>
        <IconButton size="small" color="inherit" aria-label="profile">
          <ArrowDownIcon fontSize="small" />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
