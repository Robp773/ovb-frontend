import React from "react";
import { DrillsProvider } from "./src/context/DrillsContext";

export const wrapRootElement = ({ element }) => (
  <DrillsProvider>{element}</DrillsProvider>
);
