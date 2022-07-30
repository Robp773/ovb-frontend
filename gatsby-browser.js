import React from "react";
import { DrillsProvider } from "./src/components/DrillsContext";

export const wrapRootElement = ({ element }) => (
  <DrillsProvider>{element}</DrillsProvider>
);
