import CssBaseline from '@mui/material/CssBaseline';

import { createTheme, ThemeProvider } from '@mui/material/styles';
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
});

const Layout = ({ children }) => {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
      {children}
      <Footer />

    </ThemeProvider>
  );
};

export default Layout;
