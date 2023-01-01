import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

import "normalize.css";
import "../assets/styles/main.scss";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
