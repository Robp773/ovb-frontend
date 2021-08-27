import green from "@material-ui/core/colors/green";
import purple from "@material-ui/core/colors/purple";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Footer from "~/components/footer";
import NavBar from "./navbar";

// #9c1314 red
// #353333 black
//
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
      hint: "yellow",
    },
  },
});

console.log(theme.palette);

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteNameQuery {
      strapiGlobal {
        siteName
      }
    }
  `);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
      {children}
      <Footer></Footer>
    </ThemeProvider>
  );
};

export default Layout;
