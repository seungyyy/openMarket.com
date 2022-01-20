import React from "react";
import { Navigation } from "./Navigation";
import styles from "@emotion/styled";

export const Layout = ({ children }) => {
  return (
    <>
      <Navigation/>
      { children }
    </>
  );
};