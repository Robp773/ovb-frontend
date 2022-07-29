import React from "react";
import { DrillsProvider } from "./src/components/DrillsContext";
import { CartProvider } from "use-shopping-cart";
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
  <CartProvider
    mode="payment"
    cartMode="client-only"
    stripe={process.env.GATSBY_STRIPE_PUBLISHABLE_KEY}
    successUrl={`${process.env.GATSBY_BASE_URL}/store?status=success`}
    cancelUrl={`${process.env.GATSBY_BASE_URL}/store`}
    currency="USD"
    allowedCountries={["US", "GB", "CA"]}
  >
    <DrillsProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {element}
      </ThemeProvider>
    </DrillsProvider>
  </CartProvider>
);
