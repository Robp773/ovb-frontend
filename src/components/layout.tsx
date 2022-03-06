import CssBaseline from "@material-ui/core/CssBaseline";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Footer from "./footer";
import NavBar from "./navbar";

const theme = createTheme({
  palette: {
    primary: {
      main: "#9c1314",
    },
    secondary: {
      main: "#353333",
    },
    text: {
      secondary: "#fff",
      // hint: "yellow",
    },
  },
  // overrides: {
  //   MuiCssBaseline: {
  //     "@global": {
  //       "*": {
  //         "-ms-overflow-style": "none",
  //       },
  //       "::-webkit-scrollbar": {
  //         display: "none",
  //       },
  //     },
  //   },
  // },
});

const Layout = ({ children }) => {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
      {children}
      <Footer/>
    </ThemeProvider>
  );
};

export default Layout;
