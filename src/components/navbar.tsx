import {
  Box,
  Button,
  Container,
  IconButton,
  InputBase,
  Typography,
} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import { alpha, makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import { graphql, Link } from "gatsby";
import { useLocation } from "@reach/router";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import SvgIcon from "@material-ui/core/SvgIcon";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.secondary.main,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: "auto",
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
  offset: theme.mixins.toolbar,
  appBar: { background: theme.palette.secondary.main },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-evenly",
  },
  navBtn: {
    borderRadius: "0",
    boxShadow: "none",
  },
  selectedNavBtn: {
    background: "red",
  },
  navLink: {
    textDecoration: "none",
  },
  navHomeLink: {},
  navDropDownParent: {
    position: "relative",
  },
  dropDownMenu: {
    position: "absolute",
  },
  dropDownMenuLink: {
    color: "#353333",
    textDecoration: "none",
  },
}));
const infoPages = ["/info/about", "/info/coaches", "/info/calendar", ,];
const skillsPages = [
  "/skills/leadership",
  "/skills/teamwork",
  "/skills/technical",
];
const NavBar = ({ props }) => {
  const classes = useStyles();
  const location = useLocation().pathname;
  const getNavBtnAttributes = (curPath: string, btnPath: string) => {
    return curPath === btnPath
      ? { variant: "contained", color: "#353333" }
      : { variant: "contained", color: "secondary" };
  };
  const [infoAnchorEl, setInfoAnchorEl] = React.useState(null);

  const handleInfoClick = (event) => {
    setInfoAnchorEl(event.currentTarget);
  };

  const handleInfoClose = () => {
    console.log("closing");
    setInfoAnchorEl(null);
  };

  const handleSkillsClick = (event) => {
    setSkillsAnchorEl(event.currentTarget);
  };

  const handleSkillsClose = () => {
    console.log("closing");
    setSkillsAnchorEl(null);
  };

  const [skillsAnchorEl, setSkillsAnchorEl] = React.useState(null);

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="fixed">
        <Toolbar>
          <Container className={classes.buttonContainer}>
            <Link
              className={classes.navLink}
              to="/"
              style={{ visibility: location === "/" ? "hidden" : "visible" }}
            >
              <Button
                className={classes.navBtn}
                {...getNavBtnAttributes(location, "/")}
              >
                <HomeRoundedIcon />
              </Button>
            </Link>

            <div className={classes.navDropDownParent}>
              <Button
                onClick={handleInfoClick}
                className={classes.navBtn}
                {...(infoPages.includes(location)
                  ? { variant: "contained", color: "#353333" }
                  : { variant: "contained", color: "secondary" })}
              >
                Info
              </Button>

              <Menu
                className={classes.dropDownMenu}
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
                <MenuItem>
                  <Link
                    className={classes.dropDownMenuLink}
                    onClick={handleInfoClose}
                    to="/info/about"
                  >
                    About
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleInfoClose}>
                  <Link
                    className={classes.dropDownMenuLink}
                    onClick={handleInfoClose}
                    to="/info/coaches"
                  >
                    Coaches
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleInfoClose}>
                  <Link
                    className={classes.dropDownMenuLink}
                    onClick={handleInfoClose}
                    to="/info/calendar"
                  >
                    Calendar
                  </Link>
                </MenuItem>
              </Menu>
            </div>

            <Link className={classes.navLink} to="/drills">
              <Button
                className={classes.navBtn}
                {...getNavBtnAttributes(location, "/drills")}
              >
                Drills
              </Button>
            </Link>
            <div className={classes.navDropDownParent}>
              <Button
                onClick={handleSkillsClick}
                className={classes.navBtn}
                {...(skillsPages.includes(location)
                  ? { variant: "contained", color: "#353333" }
                  : { variant: "contained", color: "secondary" })}
              >
                Skills
              </Button>

              <Menu
                className={classes.dropDownMenu}
                id="simple-menu"
                anchorEl={skillsAnchorEl}
                keepMounted
                open={Boolean(skillsAnchorEl)}
                onClose={handleSkillsClose}
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
                <MenuItem>
                  <Link
                    className={classes.dropDownMenuLink}
                    onClick={handleSkillsClose}
                    to="/skills/teamwork"
                  >
                    Teamwork
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleSkillsClose}>
                  <Link
                    className={classes.dropDownMenuLink}
                    onClick={handleSkillsClose}
                    to="/skills/technical"
                  >
                    Technical
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleSkillsClose}>
                  <Link
                    className={classes.dropDownMenuLink}
                    onClick={handleSkillsClose}
                    to="/skills/leadership"
                  >
                    Leadership
                  </Link>
                </MenuItem>
              </Menu>
            </div>

            <Link className={classes.navLink} to="/gallery">
              <Button
                className={classes.navBtn}
                {...getNavBtnAttributes(location, "/gallery")}
              >
                Gallery
              </Button>
            </Link>
            <Link className={classes.navLink} to="/forms">
              <Button
                className={classes.navBtn}
                {...getNavBtnAttributes(location, "/forms")}
              >
                Forms
              </Button>
            </Link>
            <Link className={classes.navLink} to="/scholarships">
              <Button
                className={classes.navBtn}
                {...getNavBtnAttributes(location, "/scholarships")}
              >
                Scholarships
              </Button>
            </Link>

      
            <Link className={classes.navLink} to="/store">
              <Button
                className={classes.navBtn}
                {...getNavBtnAttributes(location, "/store")}
              >
                Store
              </Button>
            </Link>
          </Container>

          <div className={classes.search}>
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
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.offset} />
    </div>
  );
};

export default NavBar;
