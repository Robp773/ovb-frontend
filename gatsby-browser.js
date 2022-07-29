import React from "react";
import { DrillsProvider } from "./src/components/DrillsContext";

import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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
export const wrapRootElement = ({ element }) => (
  <DrillsProvider>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {element}
    </ThemeProvider>
  </DrillsProvider>
);
