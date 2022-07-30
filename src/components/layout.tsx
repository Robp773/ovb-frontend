import React from "react";
import Footer from "./footer";
import NavBar from "./navbar";

import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { DrillsProvider } from "./DrillsContext";

const theme = createTheme({
  palette: {
    primary: {
      main: "#9c1314",
      contrastText: "#fff",
    },
    secondary: {
      main: "#353333",
    },

    info: {
      main: "#353333",
    },
  },
});

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <NavBar />
    {children}
    <Footer />
  </ThemeProvider>
);

export default Layout;
