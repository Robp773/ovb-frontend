import { Box, Drawer } from "@material-ui/core";
import AppBar from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import NavBtns from "./navbtnsbug";

const AppBarEl = styled(AppBar)(({ theme }) => ({
  backgroundColor: `${theme.palette.secondary.main}`,
}));
const ToolbarEl = styled(Toolbar)(({ theme }) => ({
  width: "100%",
}));

const MobileDrawerBtn = styled(IconButton)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "none !important",
  },
  color: theme.palette.common.white,
}));

const DesktopNavBtns = styled(Box)(({ theme }) => ({
  width: "100%",
  [theme.breakpoints.down("md")]: {
    display: "none !important",
  },
}));

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <AppBarEl variant="outlined" position="static">
      <ToolbarEl disableGutters>
        <MobileDrawerBtn
          onClick={() => {
            setDrawerOpen(true);
          }}
        >
          <MenuIcon />
        </MobileDrawerBtn>

        <Drawer
          PaperProps={{ variant: "outlined", style: { background: "#353333" } }}
          onClick={() => setDrawerOpen(false)}
          open={drawerOpen}
        >
          <NavBtns isMobile />
        </Drawer>
        <DesktopNavBtns>
          <NavBtns />
        </DesktopNavBtns>
      </ToolbarEl>
    </AppBarEl>
  );
};

export default NavBar;
