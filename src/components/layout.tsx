import React from "react";
import { CartProvider } from "use-shopping-cart";
import Footer from "./footer";
import NavBar from "./navbar";

const Layout = ({ children }) => (
  <>
    <CartProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.GATSBY_STRIPE_PUBLISHABLE_KEY}
      successUrl={`${process.env.GATSBY_BASE_URL}/store?status=success`}
      cancelUrl={`${process.env.GATSBY_BASE_URL}/store`}
      currency="USD"
      allowedCountries={["US", "GB", "CA"]}
    >
      <NavBar />
      {children}
      <Footer />
    </CartProvider>
  </>
);

export default Layout;
