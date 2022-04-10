// src/components/Layout.js
import React from "react";
import { GlobalStyles } from "twin.macro";

const Layout = ({ children }: any) => (
  <>
    <GlobalStyles />
    {children}
  </>
);

export default Layout;
