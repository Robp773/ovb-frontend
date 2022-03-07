import { Container, InputBase } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import { Link } from "gatsby";
import { useLocation } from "@reach/router";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

import { styled } from '@mui/material/styles';

const AppBarEl = styled(AppBar)(
  ({ theme }) => ({
    display: "flex"
  })
)
const ToolbarEl = styled(Toolbar)(
  ({ theme }) => ({
    backgroundColor: `${theme.palette.secondary.main}`,
    width: "100%",
    display: "flex"

  })
)

const ButtonContainer = styled(Container)
  ({
    display: "flex",
    justifyContent: "space-evenly",
  })

const NavLink = styled(Link)(({ theme }) => ({ textDecoration: "none", color: theme.palette.secondary.main }))

const NavDropDownParent = styled("div")({ position: "relative" })

const NavBtn = styled(Button)(({ isActive, theme }) =>
({
  borderRadius: "0",
  boxShadow: "none",
  border: `${isActive ? `1px solid ${theme.palette.common.white}` : '1px solid transparent'} `,
  color: theme.palette.common.white
})
)


const DropDownMenu = styled(Menu)({ position: "absolute" })

const infoPages = ["/info/about", "/info/coaches", "/info/calendar", ,];
const processPages = [
  "/process/leadership",
  "/process/teamwork",
  "/process/technical",
];
const NavBar = () => {
  const location = useLocation().pathname;

  const [infoAnchorEl, setInfoAnchorEl] = React.useState(null);
  const [processAnchorEl, setprocessAnchorEl] = React.useState(null);

  const handleInfoClick = (event) => {
    setInfoAnchorEl(event.currentTarget);
  };

  const handleInfoClose = () => {
    setInfoAnchorEl(null);
  };

  const handleProcessesClick = (event) => {
    setprocessAnchorEl(event.currentTarget);
  };

  const handleProcessesClose = () => {
    setprocessAnchorEl(null);
  };


  return (
    // <NavRoot>
    <AppBarEl
      position="static"
    >
      <ToolbarEl disableGutters >
        <ButtonContainer>
          <NavLink
            to="/"
          >
            <NavBtn
            // color={location === "/" ? "primary" : "secondary"}
            >
              <HomeRoundedIcon />
            </NavBtn>
          </NavLink>

          <NavDropDownParent>
            <NavBtn
              onClick={handleInfoClick}
              isActive={infoPages.includes(location)}
            >
              Info
            </NavBtn>
            <DropDownMenu
              id="simple-menu"
              anchorEl={infoAnchorEl}
              keepMounted
              open={Boolean(infoAnchorEl)}
              onClose={handleInfoClose}
              getContentAnchorEl={null}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
            >

              <NavLink
                onClick={handleInfoClose}
                to="/info/about"
              >
                <MenuItem>About</MenuItem>
              </NavLink>
              <NavLink
                onClick={handleInfoClose}
                to="/info/coaches"
              >
                <MenuItem onClick={handleInfoClose}>Coaches</MenuItem>
              </NavLink>
              <NavLink
                onClick={handleInfoClose}
                to="/info/calendar"
              >
                <MenuItem onClick={handleInfoClose}>Calendar</MenuItem>
              </NavLink>

            </DropDownMenu>
          </NavDropDownParent>

          <NavLink
            to="/articles">
            <NavBtn
              isActive={location === "/articles"}
            >
              Articles
            </NavBtn>
          </NavLink>

          <NavLink to="/drills">
            <NavBtn
              isActive={location === "/drills"}
            >
              Drills
            </NavBtn>
          </NavLink>


          <NavDropDownParent>
            <NavBtn
              onClick={handleProcessesClick}
              isActive={processPages.includes(location)}
            >
              Process
            </NavBtn>
            <DropDownMenu
              id="simple-menu"
              anchorEl={processAnchorEl}
              keepMounted
              open={Boolean(processAnchorEl)}
              onClose={handleProcessesClose}
              getContentAnchorEl={null}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
            >

              <NavLink
                onClick={handleProcessesClose}
                to="/process/teamwork"
              >
                <MenuItem onClick={handleProcessesClose}>Teamwork</MenuItem>
              </NavLink>
              <NavLink
                onClick={handleProcessesClose}
                to="/process/technical"
              >
                <MenuItem onClick={handleProcessesClose}>Technical</MenuItem>
              </NavLink>
              <NavLink
                color="textPrimary"
                onClick={handleProcessesClose}
                to="/process/leadership"
              >
                <MenuItem onClick={handleProcessesClose}>Leadership</MenuItem>
              </NavLink>

            </DropDownMenu>
          </NavDropDownParent>

          <NavLink to="/gallery">
            <NavBtn
              isActive={location === "/gallery"}
            >
              Gallery
            </NavBtn>
          </NavLink>

          <NavLink to="/forms">
            <NavBtn isActive={location === "/forms"}
            >
              Forms
            </NavBtn>
          </NavLink>

          <NavLink to="/scholarships">
            <NavBtn isActive={location === "/scholarships"}
            >
              Scholarships
            </NavBtn>
          </NavLink>

          <NavLink to="/store">
            <NavBtn isActive={location === "/store"}
            >
              Store
            </NavBtn>
          </NavLink>

        </ButtonContainer>
      </ToolbarEl>
    </AppBarEl>
    /* <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
          /> 
  </div>*/
    // </NavRoot >
  );
};

export default NavBar;
