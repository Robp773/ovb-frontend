/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it

// Import the component at the top of the file
import React from "react";
import { DrillsProvider } from "./src/components/DrillsContext";
export const wrapRootElement = ({ element }) => (
  <DrillsProvider>{element}</DrillsProvider>
);
