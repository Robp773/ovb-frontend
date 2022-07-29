import React from "react";
import Footer from "./footer";
import NavBar from "./navbar";

const Layout = ({ children }) => (
  <>
    <NavBar />
    {children}
    <Footer />
  </>
);

export default Layout;
